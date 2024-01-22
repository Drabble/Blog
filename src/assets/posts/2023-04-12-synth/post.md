**WORK IN PROGRESS**

I decided to improve my c++ and audio skills by writing a custom VST plugin with the Juce framework. 

JUCE, or the Jules' Utility Class Extensions, is a powerful C++ framework widely used for developing cross-platform audio, graphics, and interactive applications. JUCE simplifies the creation of robust software across Windows, macOS, Linux, iOS, and Android. Its extensive library includes components for GUI design, audio processing, and seamless integration with various hardware interfaces. 

**What is a VST?**

A VST is 

**Digital Signal Processing (DSP)**

Let's dive into digital signal processing first. It is a very big and interesting subject with a lot of maths and techniques.

**Juce example**

Here is a sample Juce application so you have an idea how it looks in c++.

**My synth**

I made a Cmake project with multiple cmake targets. I started by working on a modular system where I could split my modules (oscillator, filters, etc.) so that each piece could be reused for other synth or even as standalone VSTs.

Here is a demo of the result

<video autoplay loop muted>
  <source src="assets/posts/2023-04-12-synth/1.mp4" type="video/mp4">
</video>
