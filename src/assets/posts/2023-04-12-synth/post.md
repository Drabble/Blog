**WORK IN PROGRESS**

I decided to improve my c++ and audio skills by writing a custom VST plugin with the JUCE framework. It required me to learn about Digital Signal Processing, cmake configurations with multiple targets or even modular synthesis.

Let's break down these elements.

**The JUCE framework**

JUCE, or the Jules' Utility Class Extensions, is a powerful C++ framework widely used for developing cross-platform audio, graphics, and interactive applications. JUCE simplifies the creation of robust software across Windows, macOS, Linux, iOS, and Android. Its extensive library includes components for GUI design, audio processing, and integration with various hardware interfaces. 

Here is a simple JUCE example.

```cpp
#include <JuceHeader.h>

class SimpleJUCEApp : public juce::JUCEApplication
{
public:
    void initialise(const juce::String& commandLine) override
    {
        mainWindow.reset(new juce::DocumentWindow("Simple JUCE App",
                                                  juce::Colours::lightgrey,
                                                  juce::DocumentWindow::allButtons));
        mainWindow->setContentOwned(new juce::Label("Hello, JUCE!", "This is a simple JUCE app."), true);
        mainWindow->centreWithSize(400, 200);
        mainWindow->setVisible(true);
    }

    void shutdown() override { mainWindow = nullptr; }

private:
    std::unique_ptr<juce::DocumentWindow> mainWindow;
};

START_JUCE_APPLICATION(SimpleJUCEApp)
```

With the JUCE framework we can easily build VST plugins but also AU plugins or standalone audio applications.

**VST plugin**

VST stands for "Virtual Studio Technology," and it refers to a standard for audio plug-in software interfaces created by Steinberg. VST technology allows software developers to create virtual instruments and effects that can be integrated into digital audio workstations (DAWs) and other audio software.

VST plug-ins process audio in real-time. When a VST instrument is added to a track, it generates audio signals in response to MIDI input. VST effects process audio signals from an input source, altering the sound according to their design.

VST has become a widely adopted standard in the music production industry. VST3 is the latest version of the standard. However, there are other standards out there such as Audio Units (AU), AAX, RTAS, etc. AU is developed by Apple for use on macOS and iOS platforms. It is commonly used in software such as Apple's Logic Pro and GarageBand.

**Synth**

A "synth" short for synthesizer, is an electronic musical instrument that generates sound by producing electrical signals, typically in the form of waves, which are then converted into sound waves. Synthesizers are versatile instruments that can produce a wide range of sounds, from imitating traditional acoustic instruments to creating entirely new and unique tones. They have been a fundamental tool in the field of electronic music and are widely used in various genres.

Key components and features of synthesizers include:

- Oscillators: These generate the basic sound waveforms such as sine, square, sawtooth, and triangle waves. Oscillators are responsible for the fundamental tone of the sound.
- Filters: Filters shape the frequency content of the sound by attenuating or emphasizing specific frequency ranges. Common types include low-pass, high-pass, band-pass, and notch filters.
- Amplifiers (ADSR Envelope): Envelopes control the amplitude of the sound over time. The ADSR (Attack, Decay, Sustain, Release) envelope is a common configuration that determines how a sound evolves from the moment a note is triggered until it fades out.
- LFO (Low-Frequency Oscillator): LFOs generate low-frequency signals that can modulate parameters such as pitch, filter cutoff, and amplitude, creating vibrato, tremolo, and other modulation effects.
- EG: (Envelope Generator): EGs play a crucial role in shaping the amplitude of a sound over time. The standard ADSR (Attack, Decay, Sustain, Release) envelope is a common configuration found in many synthesizers. Envelopes help shape the characteristics of the sound, allowing for a wide range of expressive and dynamic possibilities in synthesizer programming.

In synthesizers, polyphony is the ability to play multiple notes simultaneously using multiple parallel oscillators. Monophonic synthesizers play one note at a time. 

Synthesizers often include MIDI (Musical Instrument Digital Interface) connectivity, allowing them to be controlled by external devices such as keyboards or sequencers.

Analog vs. Digital. Synthesizers can be analog, using analog circuitry to generate and process signals, or digital, using digital signal processing (DSP) to achieve the same goals. Hybrid synthesizers combine both analog and digital components.

**Digital Signal Processing (DSP)**

Let's dive into digital signal processing first. It is a very big and interesting subject with a lot of maths and techniques.

Digital Signal Processing (DSP) is a field that focuses on the manipulation of signals using digital techniques. In the context of audio, DSP plays a crucial role in shaping, modifying, and analyzing sound signals in a digital form. Here are some fundamental concepts to understand in the realm of DSP for audio:

1. Signals
- **Definition:** In audio DSP, signals represent variations in air pressure over time, translating into sound. These signals are typically digitized, turning continuous analog waveforms into discrete sequences of numerical values.

2. Sampling
- **Definition:** The process of converting continuous-time analog signals into discrete-time digital signals by capturing values at regular intervals.
- **Importance:** Sampling allows us to represent continuous audio signals in a format suitable for digital processing, storage, and transmission.

3. Quantization
- **Definition:** The process of approximating the amplitude of each sample with a finite number of bits.
- **Importance:** Quantization introduces a level of precision and determines the dynamic range of the digital representation.

4. Digital Filters
- **Definition:** Algorithms designed to shape the frequency content of a signal by attenuating or enhancing specific frequency components.
- **Importance:** Digital filters in audio DSP are crucial for tasks like equalization, tone shaping, and simulating analog filter characteristics.

5. Fast Fourier Transform (FFT)
- **Definition:** An algorithm used to efficiently compute the Discrete Fourier Transform (DFT) of a sequence of samples.
- **Importance:** FFT is essential for analyzing the frequency content of audio signals, enabling tasks such as spectral analysis and the implementation of various frequency-based effects.

6. Convolution
- **Definition:** A mathematical operation that combines two signals to produce a third signal.
- **Importance:** Convolution is commonly used in audio DSP for effects such as reverb and convolution reverbs, where the impulse response of a space is convolved with an audio signal.

7. Modulation
- **Definition:** The process of varying one or more parameters of a signal over time.
- **Importance:** Modulation in audio DSP introduces dynamic changes to audio signals, creating effects like vibrato, tremolo, and various time-based manipulations.

8. Real-Time Processing
- **Definition:** The ability to process audio signals with low latency, often in a live or interactive setting.
- **Importance:** Real-time processing is crucial for applications such as live performances, where immediate response to user input is essential.

Understanding these fundamental concepts provides a foundation for exploring the diverse applications of DSP in audio, ranging from synthesizers and effects processing to audio analysis and enhancement. DSP techniques continue to evolve, contributing to the rich landscape of digital audio processing in music production and other audio-related fields.

Please check this video to better understand FFT [3Blue1Brown - But what is the Fourier Transform? A visual introduction.](https://www.youtube.com/watch?v=spUNpyF58BY)

**Music, waves and digital signal processing**

As we all know sound is created by oscillations of air pressure at a certain frequency that is captured by receptors in our ears. The pitch is defined by the frequency of this fluctuation. We can hear multiple pitches at the same time because multiple oscillations will sum up into a more complex oscillation.

The most basic waveform is the sine wave. It contains a single frequency. If we change the shape of the sine wave to something more complex like a square wave, what we are actually doing is adding harmonics to the original waveform. I recommend looking in more depth into the FFT algorithm and other videos on the subject. In the end, any waveform that exists, no matter how complex, can be a combination of multiple sine waves.

![Square wave](assets/posts/2023-04-12-synth/square.webp)

Here is an example. The timbre is the unique quality of the sound that a musical instrument makes. When two different instruments play the same note, the instruments can still have very different sounds. A big difference in the timbre of instruments is often the harmonics of the instrument. If every instrument was just playing sine waves, it would not be very interesting.

Accoustic instruments move the air by vibrating a string or a surface which in turns move the air around. With analog electronic instrument, complex electronic circuits generate an variating electronic signal that will in turn move a speaker back and forth to move the air. With digital electronic instruments a software will generate the signal, that will then be transformed into an analog signal using a DAC (Digital to Analog Converter) and finally go to a speaker.


**More advanced stuff about synths**

1. **Saturation** is a nonlinear distortion effect that occurs when a signal exceeds a certain amplitude, resulting in a soft clipping or compression of the waveform. The clipping changes the waveform and adds harmonics to it. Saturation is often used in synthesizers to add warmth, character, and harmonics to sounds. It can simulate the saturation characteristics of analog circuitry.

2. **Gain** refers to the increase in amplitude or volume of a signal. In synthesizers, gain can be applied at various stages of signal processing. Gain is commonly used to control the overall volume of a sound but can also be applied strategically to shape the dynamic characteristics of a signal or to drive it into saturation for creative effects.

3. **Gate** is a control signal that opens or closes in response to specific events, such as key presses on a keyboard or a LFO. Gates are often used to trigger or gate specific elements of a synthesizer, controlling the start and end of sound events.

4. **Filter Envelope** A filter envelope is an envelope generator specifically designed to modulate the parameters of a filter, typically affecting the cutoff frequency over time. Filter envelopes are crucial for shaping the tonal characteristics of a sound. For example, using a filter envelope can create dynamic changes in brightness or warmth. Filter envelopes have been invented a long time ago to replicate more closely the sound a real piano.

5. **Contour** In the context of synthesizers, contour refers to the shaping of the amplitude envelope of a sound, including Attack, Decay, Sustain, and Release (ADSR) parameters. Contour settings allow precise control over how a sound evolves over time. Different contour shapes can be used to create sharp, percussive sounds or smooth, evolving textures.

6. **Module synthesis** is an approach to sound synthesis that involves building a synthesizer by connecting individual modules. Each module typically performs a specific function, such as oscillators, filters, envelopes, and more. Users can customize and configure the signal flow by patching cables between modules. Modular synthesizers provide unparalleled flexibility and creativity. Musicians can create unique signal paths, experiment with signal routing, and build highly customized sound generation and processing systems.

7. **Voltage control** (or control voltage, CV) is a method used in analog synthesizers where voltages are used to control various parameters. Changes in voltage can alter the pitch, amplitude, filter cutoff, and other parameters. Voltage control allows for dynamic and expressive manipulation of sound parameters. For example, a voltage-controlled oscillator (VCO) can change pitch based on the incoming control voltage, and a voltage-controlled filter (VCF) can alter its cutoff frequency in response to voltage changes.

Please check out this underrate video on saturation: [sseb - You Don't Understand Saturation
](https://www.youtube.com/watch?v=YuojAtE8YCY)

**My synth**

I made a JUCE Cmake project with multiple cmake targets. JUCE projects were initially made with the Projucer IDE. But with a bit of tinkering now, you can get it working with Cmake.

I started by working on a modular system where I could split my synth modules (oscillator, filters, etc.) so that each piece could be reused for other synth or even as standalone VSTs. 

The synth is polyphonic. Here is the wiring of the components in order.

1. Oscillators (sine, triangle or square wave) with frequency modulator
2. ADSR Envelope generator (affects the amplitude of the signal)
3. Filter (low-pass, high-pass or band-pass)
4. ADSR Filter envelope generator
5. Distortion

It also includes a midi controller and a oscilloscope. Here is a demo of the result:

<video autoplay loop controls>
  <source src="assets/posts/2023-04-12-synth/1.mp4" type="video/mp4">
</video>
