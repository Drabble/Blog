Checkout out https://audioma.io.

The other day I was bored with Duo Lingo, trying to learn spanish and doing exercices. It becomes highly repetitive
and uninteresting. So I decided I would try listening to spanish each opportunity I had. I wanted to listen to it
while cooking, walking the dog or all other simple tasks where your mind is free to concentrate on something else.
I started looking for simple audiobooks in spanish but quickly found that it was either too complex or not interesting to me.
For example, children stories are simple to understand but not very interesting. I realised I could generate audiobooks
by leveraging LLMs such as ChatGPT along with state of the art TTS (text to speech) models to generate interesting content
in any language.

This is where the idea for Audioma came. Why not generate a bunch of audiobooks on all kinds of topics, like
geography, history, science, etc. Put them on a CDN and make an app to read them. On top of that with some 
simple tricks, I can also generate subtitles and show the text in any languages along with the speech.

So I started implementing Audioma. I spent some time trying out a bunch of TTS models. The first one I tried is called
Eleven Labs. It's the best model I could find, at the time of writing, but it is very expensive. I did not feel like 
spending too much money initially so I tried with many other models, both through APIs and locally.

The architecture of Audioma is very simple, I did a quick Stripe integration to be able to have paid plans.

Here is a quick video of how it looks at the time of writing. I am still working on many minor improvements.

<video autoplay loop>
  <source src="assets/posts/2025-01-01-audioma/1.mp4" type="video/mp4">
</video>
