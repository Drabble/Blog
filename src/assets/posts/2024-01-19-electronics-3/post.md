A follow-up on the previous post [Electronic components](/post/2024-01-19-electronics-2), we will look at electronic circuits.

**Transistor in active mode:**

Let's look at the BC547 datasheet. The BC547 is a simple NPN transistor.

![BC547 transistor](assets/posts/2024-01-19-electronics-3/bc547.webp "BC547 transistor")

*BC547 transistor https://www.farnell.com/datasheets/59764.pdf*

From this first page of the datasheet we can get the following informations:

1. The BC547 can operate up to 45V in the $V_{CE}$. We can use a lower voltage but not higher.
2. The $V_BE$ should not exceed 6 volts.
3. The maximum current flowing through the collect $I_C$ is 500 mA.
4. The temperature of the transistor should never exceed +150 °C.
5. The BC547 can dissipate a maximum power of 625 mW. That means that we can't run it at 45V and 500mA as that would $P = IV = 22.5W$.

On the following page we have information about the DC current gain which is how we compute the value required at the base.

![BC547 transistor](assets/posts/2024-01-19-electronics-3/bc547.webp "BC547 transistor")

*BC547 transistor part 2 https://www.farnell.com/datasheets/59764.pdf*

Here is the relevant information from this page for our example:

1. $h_{FE}$ is the DC current gain. Its value for the BC547 is minimum 110 to maximum 800. It varies based on multiple things such as temperature, unit, voltage, etc. We need to take into account this range but we can make our calculations by chosing any value inside of this range. Let's say 400 for example.
2. Base-emitter saturation voltage $V_{BE}(sat)$ is the voltage at which we reach saturation mode. For an $I_C$ of 10mA and an $I_B$ of 0.5mA, we typically need a voltage of 700mV. Saturation mode is when the transistor is fully open.
3. Base−Emitter On Voltage $V_{BE}(on)$ is the voltage at which the transistor is in active mode. It will amplify $V_{CE}$ based on $V_{BE}$. It operates betweer 580mV and 800mV. You see some extra values such as 720mV in the spec. These are the values for a higher operating current.
4. Finally we have some extra infos on capacitance because all transistor have a certain capacitance value and noise figure which is related to the noise in the output of the transistor.

At the end of the datasheet, we usually get some figures. I will only show one of the figures. It is the base-emitter voltage relative to the collector current. It allows us to know which voltage we want to give the in the base in order to affect the current in the collector.

![BC547 transistor](assets/posts/2024-01-19-electronics-3/vbe.webp "BC547 transistor")

*BC547 transistor part 3 https://www.mouser.ch/datasheet/2/308/1/BC550_D-2310266.pdf*

We see that we need a base voltage of around 0.58V for the transistor to start working. After that it moves linearly between 0.58V and 0.8V. To reach the base voltage of 0.58 we usually do something called base biasing where we connect the collector battery (e.g. 12V) to the base with a resistor so that it gets exactly 0.58V if the base signal is DC or 0.69V if the base signal is AC. If the base signal is AC, we will couple it with a capacitor to transform it to DC signal. I will explain more about this in the next section: voltage dividing.

The "5V" in the image above refers to the collector-emitter voltage $V_{CE}$ under specific conditions, not indicating an internal resistance. It represents the voltage drop across the transistor when it's in the active mode, influenced by its semiconductor characteristics. 

**Voltage dividing:**

Voltage dividing, also known as a voltage divider, is a fundamental concept in electronics that involves creating a fraction of a voltage from a higher voltage source using resistors. This technique is widely used in circuits for various purposes, such as setting bias points, providing reference voltages, or creating adjustable voltage levels.

A voltage divider typically consists of two resistors connected in series between a voltage source and ground. The output voltage is taken from the junction between the two resistors. The principle behind voltage dividing is based on Ohm's Law, which states that the voltage across a resistor is directly proportional to the current flowing through it.

![Voltage divider](assets/posts/2024-01-19-electronics-3/voltage_divider.webp "Voltage divider")

*Voltage divider*

The formula for calculating the output voltage $V_{\text{out}}$ in a simple voltage divider is given by:

$\[ V_{\text{out}} = V_{\text{in}} \times \frac{R_2}{R_1 + R_2} \]$

where:
- $\(V_{\text{in}}\)$ is the input voltage.
- $\(R_1\) and \(R_2\)$ are the resistances of the two resistors in the divider.

The ratio $\(R_2 / (R_1 + R_2)\)$ determines the fraction of the input voltage that appears at the output. By choosing appropriate resistor values, one can tailor the output voltage to a desired level.

Voltage dividers find applications in various scenarios, such as:
1. **Biasing Transistors:** Setting the bias point for transistors in amplifier circuits.
2. **Reference Voltages:** Generating a reference voltage for analog circuits.
3. **Sensors and Measurement Circuits:** Scaling down voltages for compatibility with microcontrollers or other devices.
4. **Adjustable Voltage Levels:** Creating variable voltage references for different components in a circuit.

While voltage dividing is a straightforward technique, it's essential to consider factors such as resistor tolerances, load impedance, and the current flowing through the divider, as these can affect the accuracy and stability of the divided voltage. Careful selection of resistor values and attention to circuit details ensure reliable and precise voltage division in electronic circuits.

**Electret microphone amplification with +48V phatom power:**

I highly recommend this awesome video here [https://www.youtube.com/watch?v=gnHuzM8PDrc](https://www.youtube.com/watch?v=gnHuzM8PDrc).
Coming soon...

**Audio signal amplification with single transistor:**

Coming soon...

**Distortion pedal:**

Coming soon...