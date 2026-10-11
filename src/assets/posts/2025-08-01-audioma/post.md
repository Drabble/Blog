Checkout out https://audioma.io.

I was getting bored with repetitive Spanish exercises on Duolingo. I wanted something to listen to while cooking or walking the dog, but the audiobooks I found were either too difficult or not interesting to me. Children's stories were easier to follow, but I wanted other subjects.

That led me to try generating stories with an LLM and reading them with a text-to-speech model. I could choose both the topic and the language level.

This is where the idea for Audioma came. Why not generate a bunch of audiobooks on all kinds of topics, like
geography, history, science, etc. Put them on a CDN and make an app to read them. On top of that with some 
simple tricks, I can also generate subtitles and show the text in any languages along with the speech.

So I started implementing Audioma. I spent some time trying out a bunch of TTS models. The first one I tried is called
Eleven Labs. It's the best model I could find, at the time of writing, but it is very expensive. I did not feel like 
spending too much money initially so I tried with many other models, both through APIs and locally.

The architecture of Audioma is very simple, I did a quick Stripe integration to be able to have paid plans.

Here is a quick video of how it looks at the time of writing. I am still working on many minor improvements.

<video autoplay loop>
  <source src="assets/posts/2025-08-01-audioma/1.mp4" type="video/mp4">
</video>
