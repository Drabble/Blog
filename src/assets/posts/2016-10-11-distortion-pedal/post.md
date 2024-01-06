I was learning more about electronics and decided to find the simplest circuit to make. I ordered some basic components from Aliexpress and found a schematic that was very similar to this.

![Schematic](assets/posts/2016-10-11-distortion-pedal/schematic.webp "Schematic")

Diodes are often used in guitar pedals, especially in distortion and overdrive circuits, to shape the waveform and create clipping effects that result in distortion. The type of diodes used and how they are configured in the circuit can significantly influence the character of the distortion produced.

When diodes are used for clipping in a guitar pedal circuit, they limit the voltage by allowing current to flow in one direction more easily than the other. This introduces a non-linear element into the signal processing, leading to waveform shaping and harmonic generation, which are key components of distortion.

The distortion created by diodes is influenced by several factors:

- Type of Diodes: Different diodes (such as silicon, germanium, or LEDs) have distinct characteristics. Silicon diodes tend to produce harder, more asymmetrical clipping, while germanium diodes often contribute to a smoother, more symmetrical clipping. LEDs can provide a unique clipping characteristic as well.
- Clipping Configuration: The arrangement of diodes in the circuit (series, parallel, or a combination) affects the clipping behavior. Different configurations produce different harmonic content and distortion characteristics.
- Biasing and Voltage Levels: The biasing of diodes and the voltage levels in the circuit can impact the threshold at which the diodes start to conduct and clip the signal. Adjusting these parameters can influence the overall gain and tone of the distortion.
- Amplification Stage: Diodes are often placed within amplification stages of a pedal. The gain of the amplifier, along with diode clipping, contributes to the overall distortion. Adjusting the gain of the amplifier can further shape the distortion characteristics.
While diodes contribute to the distortion effect in guitar pedals, their inherent non-linear behavior can introduce harmonics, overtones, and clipping, which collectively create the desired distortion sound. Experimenting with different diode types, configurations, and circuit designs allows guitar pedal designers to achieve a wide range of distortion tones catering to various musical preferences.

I first tried the schematic on a breadboard as you can see below.

![Picture](assets/posts/2016-10-11-distortion-pedal/1.webp "Picture")
![Picture](assets/posts/2016-10-11-distortion-pedal/2.webp "Picture")
![Picture](assets/posts/2016-10-11-distortion-pedal/3.webp "Picture")
![Picture](assets/posts/2016-10-11-distortion-pedal/4.webp "Picture")

Then I soldered the whole thing into a case. Unfortunately I don't have any recording of the distortion but I was happy with the result for such a simple circuit.

![Picture](assets/posts/2016-10-11-distortion-pedal/5.webp "Picture")
![Picture](assets/posts/2016-10-11-distortion-pedal/6.webp "Picture")
![Picture](assets/posts/2016-10-11-distortion-pedal/7.webp "Picture")
![Picture](assets/posts/2016-10-11-distortion-pedal/8.webp "Picture")
![Picture](assets/posts/2016-10-11-distortion-pedal/9.webp "Picture")
![Picture](assets/posts/2016-10-11-distortion-pedal/10.webp "Picture")
![Picture](assets/posts/2016-10-11-distortion-pedal/11.webp "Picture")
![Picture](assets/posts/2016-10-11-distortion-pedal/12.webp "Picture")
![Picture](assets/posts/2016-10-11-distortion-pedal/13.webp "Picture")

*Pictures of the project*