I have always been interested in making music. However it is not an easy task. You often learn by first listening and playing music from other people. Then you can adapt what they did by adding your own twist or a fusion between multiple other songs. A change in the key, a different melody, different instruments, a different rythm, different lyrics, etc. There are so many possibilities.

A computer is not able to be creative on its own. It needs to learn data first. Our goal in this project to is to teach the artificial intelligence how to represent the data. And then to use probabilistic methods to sample unseen data. I believe it can be called a stochastic approach. I would like to call it controlled randomization.

**Autoencoders**

Let's take the wikipedia definition:

> An autoencoder is a type of artificial neural network used to learn efficient codings of unlabeled data (unsupervised learning). An autoencoder learns two functions: an encoding function that transforms the input data, and a decoding function that recreates the input data from the encoded representation. The autoencoder learns an efficient representation (encoding) for a set of data, typically for dimensionality reduction.

I'll try to explain it in an easier way. The autoencoder's goal is to compress the input data, an image in the example below, and then to decompress it to reproduce the exact same output as the initial input. The block in the middle is called the latent space. It contains a compressed representation of our image. If for example it only had 1 bit in size with a value 0 or 1, it could only learn how to encode a maximum of two images. If we give the latent space a bigger size, than it will be able to learn features of the image. For example the color of the face, the color of the hair or the position of the face in the image.

![Screenshot](assets/posts/2019-09-05-midi-gen/ae1.webp "Screenshot")

*The autoencoder model learning how to encode and decode an image*

The most important thing to understand is that the latent space will automatically learn the features it encodes. Just like a convolutional neural network (CNN) learns filters by itself. It is usually initialized with random values and then the values are learned during training.

The premise of using an autoencoder as a generational model is that we teach it how to encode/decode data to reproduce the exact same data, and then we alter the latent space to cause a change in the decoded output. 

**A simple example**

Let's say we are training an autoencoder to generate new designs for chairs. Here are the steps we would follow.

1. Create our autoencoder model with an encoded, a decoder and a latent space of a given size.
2. Gather a dataset of images of different chairs.
3. Train the autoencoder to encode the chair, then decode the chair use the difference between the input image and the output image as a loss function.
4. Alter the latent space to generate new chairs.

In step 3. we are hoping that our latent space will learn different features of the chairs such as the colour, the width, the height, the shape, etc. When we alter the latent space, we hope that we will be changes these features such as the width. This way, we will be generating a new chair that didn't exist before.

The biggest problem in this example is that we don't know how to alter the latent space in step 4. Do we give the latent space random values and hope that it will work. If the latent space is too big, then we will probably get very bad results. If the latent space is too small then we might overfit our data and get less possibilities to generate new chairs.

**Variational autoencoders**

Variational autoencoders are probabilistic generative models. Looking at the VAE wikipedia page is quite difficult because of all the probabilistic jargon [https://en.wikipedia.org/wiki/Variational_autoencoder](https://en.wikipedia.org/wiki/Variational_autoencoder). There are two important things to understand.

The first thing is that the encoder will learn how to generate the parameters μ (the mean) and σ (standard deviation) of a variational distribution (usually a Gaussian/normal distribution) instead of the latent space directly.

![Screenshot](assets/posts/2019-09-05-midi-gen/distribution1.webp "Screenshot")

*μ (the mean) and σ (standard deviation) of a normal distribution*

Then it samples the variational distribution with a random value to generate the latent space. The goal for this point is to capture the inherent uncertainty and variability in the data. We can have 2 pictures of the same chair but with a different lighting which causes small differences in the image.

![Screenshot](assets/posts/2019-09-05-midi-gen/vae1.webp "Screenshot")

*The variational autoencoder model*

The second thing that we need to understand is that during training, VAEs aim to make the distribution in the latent space match a standard Gaussian distribution (with mean 0 and standard deviation 1) to encourage smooth and continuous representations. To do that it uses the Kullback-Leibler (KL) divergence. It measures how one probability distribution diverges from a second using a formula. You don't need to understand how KL divergence work, but you need to understand that if our data follow a standard normal distribution, we will be able to sample meaningful values from that distribution. This was the main problem with the standard autoencoder. If we sampled values randomly from the latent space, we got bad results. Now if we sample data by following the standard normal distribution, we will get better results.

$\text{KL}(Q(z|X) \,||\, P(z)) = \frac{1}{2} \left( \sigma^2 + \mu^2 - 1 - \log(\sigma^2) \right)$

*You don't need to understand this formula. Just know that it will be used in our loss function to make the overall distribution of our encoded data closer to a standard gaussian distribution.

![Screenshot](assets/posts/2019-09-05-midi-gen/vae2.webp "Screenshot")

*The variational autoencoder model*

It might take some time to understand the concept and the goal of all this and I recommend reading more papers and watching videos on the topic to get a visual representation of what happens inside the VAE.

**Tensorflow and Keras implementation**

Here is an example of a variational auto encoder written with Tensorflow and Keras.

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras import layers, models

# Define VAE model
class VAE(tf.keras.Model):
    def __init__(self, latent_dim):
        super(VAE, self).__init__()
        self.latent_dim = latent_dim

        # Encoder
        self.encoder = models.Sequential([
            layers.InputLayer(input_shape=(sequence_length, num_features)),
            layers.Flatten(),
            layers.Dense(256, activation='relu'),
            layers.Dense(128, activation='relu'),
            layers.Dense(64, activation='relu')
        ])

        # Latent space
        self.z_mean = layers.Dense(latent_dim)
        self.z_log_var = layers.Dense(latent_dim)

        # Sampling function
        self.sampling = Sampling()

        # Decoder
        self.decoder = models.Sequential([
            layers.InputLayer(input_shape=(latent_dim,)),
            layers.Dense(64, activation='relu'),
            layers.Dense(128, activation='relu'),
            layers.Dense(256, activation='relu'),
            layers.Dense(sequence_length * num_features, activation='sigmoid'),
            layers.Reshape((sequence_length, num_features))
        ])

    def call(self, inputs):
        # Encode input sequence
        z_mean, z_log_var = self.encode(inputs)
        # Reparameterization trick to sample from the distribution
        z = self.sampling((z_mean, z_log_var))
        # Decode the sampled sequence
        reconstructed_sequence = self.decode(z)
        return reconstructed_sequence

    def encode(self, inputs):
        x = self.encoder(inputs)
        z_mean = self.z_mean(x)
        z_log_var = self.z_log_var(x)
        return z_mean, z_log_var

    def decode(self, z):
        return self.decoder(z)

# Custom sampling layer using reparameterization trick
class Sampling(layers.Layer):
    def call(self, inputs):
        z_mean, z_log_var = inputs
        batch = tf.shape(z_mean)[0]
        dim = tf.shape(z_mean)[1]
        epsilon = tf.keras.backend.random_normal(shape=(batch, dim))
        return z_mean + tf.exp(0.5 * z_log_var) * epsilon

# Hyperparameters
sequence_length = 100  # Length of the input sequences
num_features = 88  # Number of features in each time step (e.g., MIDI notes)

latent_dim = 16  # Dimensionality of the latent space

# Create VAE model
vae = VAE(latent_dim)

# Compile the model
vae.compile(optimizer='adam', loss='mse')

# Train the model with your MIDI dataset
# X_train is your input data, representing sequences of MIDI-like data
vae.fit(X_train, X_train, epochs=50, batch_size=64)
```

**Pytorch implementation**

Now the same but with Pytorch.

```python
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset
import torch.nn.functional as F

# Define VAE model
class VAE(nn.Module):
    def __init__(self, input_size, latent_dim):
        super(VAE, self).__init__()
        self.input_size = input_size
        self.latent_dim = latent_dim

        # Encoder
        self.encoder = nn.Sequential(
            nn.Linear(input_size, 256),
            nn.ReLU(),
            nn.Linear(256, 128),
            nn.ReLU(),
            nn.Linear(128, 64),
            nn.ReLU()
        )

        # Latent space
        self.z_mean = nn.Linear(64, latent_dim)
        self.z_log_var = nn.Linear(64, latent_dim)

        # Decoder
        self.decoder = nn.Sequential(
            nn.Linear(latent_dim, 64),
            nn.ReLU(),
            nn.Linear(64, 128),
            nn.ReLU(),
            nn.Linear(128, 256),
            nn.ReLU(),
            nn.Linear(256, input_size),
            nn.Sigmoid()
        )

    def encode(self, x):
        x = self.encoder(x)
        z_mean = self.z_mean(x)
        z_log_var = self.z_log_var(x)
        return z_mean, z_log_var

    def decode(self, z):
        return self.decoder(z)

    def reparameterize(self, mu, log_var):
        std = torch.exp(0.5 * log_var)
        eps = torch.randn_like(std)
        return mu + eps * std

    def forward(self, x):
        mu, log_var = self.encode(x.view(-1, self.input_size))
        z = self.reparameterize(mu, log_var)
        decoded = self.decode(z)
        return decoded

# Hyperparameters
sequence_length = 100  # Length of the input sequences
num_features = 88  # Number of features in each time step (e.g., MIDI notes)

latent_dim = 16  # Dimensionality of the latent space

# Create VAE model
vae = VAE(input_size=sequence_length * num_features, latent_dim=latent_dim)

# Loss function
def loss_function(recon_x, x, mu, log_var):
    BCE = F.binary_cross_entropy(recon_x, x.view(-1, sequence_length * num_features), reduction='sum')

    # KL divergence
    KLD = -0.5 * torch.sum(1 + log_var - mu.pow(2) - log_var.exp())

    return BCE + KLD

# Optimizer
optimizer = optim.Adam(vae.parameters(), lr=1e-3)

# Convert your MIDI dataset to PyTorch tensors and create DataLoader
# Assuming X_train is your input data
X_train_tensor = torch.Tensor(X_train)
dataset = TensorDataset(X_train_tensor, X_train_tensor)
dataloader = DataLoader(dataset, batch_size=64, shuffle=True)

# Training loop
epochs = 50
for epoch in range(epochs):
    for batch_data, _ in dataloader:
        optimizer.zero_grad()
        recon_batch = vae(batch_data)
        loss = loss_function(recon_batch, batch_data, *vae.encode(batch_data.view(-1, sequence_length * num_features)))
        loss.backward()
        optimizer.step()

```

**How I generated music with VAEs**

Generating a raw audio signal is very complex. In signal processing, the Nyquist theorem states that the sample rate must be at least twice the bandwidth of the signal to avoid aliasing. As humans can hear sounds up to around 20 kHz, we should have a sampling rate of at least 41 kHz for high quality audio. An audio sample of music can comprise multiple instruments and voices, different timbres, all kinds of frequencies and harmonics, etc.

Instead of generating raw audio, we can generate a Midi file. A MIDI file is not an audio recording. Rather, it is a set of instructions – for example, for pitch, velocity or tempo – and can use a thousand times less disk space than the equivalent recorded audio. It follows the MIDI standard.

For a first prototype, we only need to care about the notes played (discrete pitch) over time. We can also quantise all the notes in time in a grid. This gives us a 2d array just like an image. The row defines the notes, for example 4 octaves makes 48 notes. The number of columns depend on the duration and the BPM (beats per minute) and the number of notes per beat. If we want 1 minute of audio with 120 BPM and 4 notes per beat, that gives us 480 columns. The final shape is 48x480.

The 2d array is similar to an image and we can take the same approach. We flatten it before and then we feed it as input to the VAE.

If we want more than one instrument, we can make multiple generations and merge them into one midi file, however they might not be coherent. 

Another problem is that if we want to generate a long song, then it is difficult to generate two sequences that are coherent. The keys or the rythm might change abruptly.

Some of these problems are solved in my latest blog post here [here](here).

Here are some examples of songs I generated with the VAE I trained with Tensorflow and Keras in a Jupyter notebook.

<audio controls="controls" class="item"><source src="assets/posts/2019-09-05-midi-gen/Gen1.m4a" type="audio/mpeg"> Your browser does not support the audio element. </audio>
<audio controls="controls" class="item"><source src="assets/posts/2019-09-05-midi-gen/Gen2.m4a" type="audio/mpeg"> Your browser does not support the audio element. </audio>
<audio controls="controls" class="item"><source src="assets/posts/2019-09-05-midi-gen/Gen3.m4a" type="audio/mpeg"> Your browser does not support the audio element. </audio>

This is what my Midi file look like as images.

![Screenshot](assets/posts/2019-09-05-midi-gen/1.webp "Screenshot")
![Screenshot](assets/posts/2019-09-05-midi-gen/2.webp "Screenshot")

*The variational autoencoder model*