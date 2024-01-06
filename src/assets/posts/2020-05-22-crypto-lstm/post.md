The goal of this project was first to improve my knowledge on LSTM (Long Short Term Memory) recurrent neural network. A LSTM is a type of deep neural network that is used for time series where an output of the neural network is dependent on the previous output. 

**LSTM recurrent neural network**

At the core of an LSTM is the concept of a "memory cell." This cell is like a conveyor belt that runs through the entire sequence, allowing information to be added or removed.

LSTMs use three types of gates to control the flow of information into and out of the memory cell: the input gate, forget gate, and output gate.
Each gate is a set of weights and biases that are learned during the training process.
Forget Gate:

The forget gate decides which information from the previous state should be thrown away or kept.
It takes the previous cell state and the current input, applies a sigmoid activation function, and outputs values between 0 and 1.
A value of 1 means "keep this information," and a value of 0 means "forget this information."
Input Gate:

The input gate decides what new information to store in the memory cell.
It involves two steps:
a. A sigmoid layer called the "input gate layer" decides which values to update.
b. A tanh layer creates a vector of new candidate values that could be added to the state.
Updating the Cell State:

The forget gate output and the input gate output are combined to update the memory cell state.
The forget gate determines what to discard from the previous state, and the input gate determines what to store in the new state.
Output Gate:

The output gate decides what the next hidden state should be.
It involves two steps:
a. A sigmoid layer decides which parts of the memory cell state to output.
b. The output is then filtered through a tanh layer to ensure the values are between -1 and 1.
Final Output:

The updated memory cell state becomes the hidden state for the next time step, and the output is generated based on this hidden state. During training, the LSTM learns the weights and biases of its gates through the backpropagation algorithm.

In summary, LSTMs use memory cells and gates to selectively read, write, and erase information over multiple time steps, allowing them to capture long-term dependencies in sequential data. This architecture helps mitigate the vanishing gradient problem and makes LSTMs effective for tasks such as natural language processing, time series prediction, and more.

![Screenshot](assets/posts/2020-05-22-crypto-lstm/2.webp "Screenshot")
*LSTM cell*

LSTM can still suffer from the vanishing gradient problem. It happens when the gradients are multiplied repeatedly during backpropagation through the recurrent connections. This causes the gradients to get smaller and smaller until they disappear.

**Predicting crypto prices**

This project's premise is to take the price of a cryptocurrency over time and predict it's future value with a LSTM network.

There are 2 things to consider:

- On what time scale do we want to predict the future price. It could be seconds, minutes, hours, days...
- On which data should we train the model. We could train only on the same cryptocurrency but also use other cryptocurrencies to train the model.

![Screenshot](assets/posts/2020-05-22-crypto-lstm/2.webp "Screenshot")
![Screenshot](assets/posts/2020-05-22-crypto-lstm/3.webp "Screenshot")

*BTC and ETH weekly prices*

First we fetch the data from an API. In my tests I used the Coingecko API [https://www.coingecko.com/en/api](https://www.coingecko.com/en/api).

Then we write a LSTM network with either Pytorch or Tensorflow. Here is an example with Pytorch. We can simply use and configure the `nn.LSTM` module.

```python
import torch
import torch.nn as nn

class SimpleLSTM(nn.Module):
    def __init__(self, input_size, hidden_size, num_layers, output_size):
        super(SimpleLSTM, self).__init__()
        self.hidden_size = hidden_size
        self.num_layers = num_layers

        # Define the LSTM layer
        self.lstm = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)

        # Define the output layer
        self.fc = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        # Initialize hidden state and cell state
        h0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)
        c0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)

        # Forward pass through the LSTM layer
        out, _ = self.lstm(x, (h0, c0))

        # Take the output from the last time step
        out = self.fc(out[:, -1, :])

        return out

# Hyperparameters
input_size = 10  # Number of features in the input
hidden_size = 32  # Number of hidden units in the LSTM layer
num_layers = 2  # Number of LSTM layers
output_size = 1  # Number of output units

# Create the LSTM model
lstm_model = SimpleLSTM(input_size, hidden_size, num_layers, output_size)
```

![Screenshot](assets/posts/2020-05-22-crypto-lstm/4.webp "Screenshot")
*Note: this is not the same model as in the code example*

Then using our train data from the Coingecko API we can train our LSTM model.

```python
# Loss function and optimizer
criterion = nn.MSELoss()
optimizer = optim.Adam(lstm_model.parameters(), lr=learning_rate)

# Training loop
for epoch in range(num_epochs):
    # Forward pass
    outputs = lstm_model(input_data)

    # Compute the loss
    loss = criterion(outputs, target_data)

    # Backward pass and optimization
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

    # Print the loss for every 10 epochs
    if (epoch + 1) % 10 == 0:
        print(f'Epoch [{epoch + 1}/{num_epochs}], Loss: {loss.item():.4f}')

# Test the trained model with the same input
with torch.no_grad():
    test_output = lstm_model(input_data)
    print("Test Output:", test_output.item())
```

![Screenshot](assets/posts/2020-05-22-crypto-lstm/5.webp "Screenshot")
*Training result*

Finally we can test our model by predicting data and plotting the actual value vs the predicted value.

![Screenshot](assets/posts/2020-05-22-crypto-lstm/6.webp "Screenshot")
![Screenshot](assets/posts/2020-05-22-crypto-lstm/7.webp "Screenshot")
![Screenshot](assets/posts/2020-05-22-crypto-lstm/8.webp "Screenshot")
![Screenshot](assets/posts/2020-05-22-crypto-lstm/9.webp "Screenshot")
![Screenshot](assets/posts/2020-05-22-crypto-lstm/10.webp "Screenshot")
![Screenshot](assets/posts/2020-05-22-crypto-lstm/11.webp "Screenshot")
![Screenshot](assets/posts/2020-05-22-crypto-lstm/12.webp "Screenshot")
![Screenshot](assets/posts/2020-05-22-crypto-lstm/13.webp "Screenshot")
![Screenshot](assets/posts/2020-05-22-crypto-lstm/14.webp "Screenshot")
![Screenshot](assets/posts/2020-05-22-crypto-lstm/15.webp "Screenshot")
![Screenshot](assets/posts/2020-05-22-crypto-lstm/16.webp "Screenshot")

*Screenshots from crypto LSTM jupyter notebook*