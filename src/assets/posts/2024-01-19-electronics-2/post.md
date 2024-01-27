A follow-up on the previous post [Electronic concepts](/post/2024-01-19-electronics-1), we will look at electronic components we can use and how to create circuits to solve actual problems.

First here is a recap on the electronic concepts that are import here, as well as the water analogy that we will continue later in this post. Current is the flow of electric charge in a conductor, measured in amperes (A). It is driven by a potential difference, such as voltage (V), which provides the force for electrons to move. Current flows from the positive to negative terminal in a circuit, opposite to the direction of electron movement. In direct current (DC), electrons move consistently in one direction, while in alternating current (AC), electrons oscillate back and forth at a certain frequency. The relationship between current (I), voltage (V), and resistance (R) is described by Ohm's Law: $I = V/R$. Moving electrons create a electromagnetic field which is what we consider the current. In a vacuum this electromagnetic field which is made of Photons (elementary particle) moves a the speed of light. The movement speed of electrons within a conductor is less than 1% of the speed of light. In the water analogy, the current is simply the measure of the amount of water going through a pipe. The voltage is the pressure of water and the resistance is a narrow section that restricts the flow of water and causes a drop in the water pressure.

![Analogy with water](assets/posts/2024-01-19-electronics-2/analogy.webp "Analogy with water")

*Water analogy for electricity*

Knowing Maxwell's laws can also be useful when dealing with electromagnetic fields. But the most important law for basic electronics is Ohm's Law $I = V/R$. 

Other notable laws are:

1. **Ohm's Law:**
   - $V = IR$
   - Ohm's Law relates voltage $V$$, current $I$, and resistance $R$ in a circuit.

2. **Kirchhoff's Current Law (KCL):**
   - $\sum I_{\text{in}} = \sum I_{\text{out}}$
   - KCL states that the total current entering a node in an electrical circuit is equal to the total current leaving the node.

3. **Kirchhoff's Voltage Law (KVL):**
   - $\sum V_{\text{loop}} = 0$
   - KVL states that the sum of the electromotive forces (EMFs) and voltage drops in any closed loop of a circuit is zero.

4. **Joule's Law:**
   - $P = VI = I^2R = \frac{V^2}{R}$
   - Joule's Law describes power $P$ dissipation in a resistor, where $V$ is voltage, $I$ is current, and $R$ is resistance. P is in watts.The unit of power, the watt, is equivalent to one joule per second (1 W = 1 J/s).

5. **Series Circuit Rules:**
   - $R_{\text{total}} = R_1 + R_2 + \ldots + R_n$
   - The total resistance (R_{\text{total}}$ in a series circuit is the sum of the individual resistances $R_1, R_2, \ldots, R_n$.

6. **Parallel Circuit Rules:**
   - $\frac{1}{R_{\text{total}}} = \frac{1}{R_1} + \frac{1}{R_2} + \ldots + \frac{1}{R_n}$
   - The reciprocal of the total resistance (\frac{1}{R_{\text{total}}}$ in a parallel circuit is the sum of the reciprocals of the individual resistances $\frac{1}{R_1} + \frac{1}{R_2} + \ldots + \frac{1}{R_n}$.

**Direct Current (DC):** Direct current is a flow of electrons in one direction, maintaining a constant polarity, commonly associated with batteries.

**Alternating Current (AC):** Alternating current is an electric current that reverses direction periodically, typically used for power transmission due to its ability to easily change voltage levels using transformers. I really recommend reading about Nikola Tesla and Edison. It's a really interesting topic. Check out this book "Wizard - The Life and Times of Nikola Tesla". Another cool topic related to AC current is that the frequency of most power grids is 50hz. Transformers working at 50hz will often generate a light sound or electromagnetic noise that can be caught by videos audio. The frequency of the power grid is not always constant and has slight fluctuations. If you have access to the fluctuations data, you can match a sequence of audio from a video with the grid fluctuations using the 50hz frequency range with the fourrier transform and find the exact time of the video. This works for example on the UK power grid.

**Resistor (R):** A resistor is a passive two-terminal electronic component that opposes the flow of electric current. It is commonly used to control the amount of current flowing in a circuit and to provide voltage division in a circuit. The resistance of a resistor can be read from the color strips that you can find on most resistors.

![Resistor](assets/posts/2024-01-19-electronics-2/resistor.webp "Resistor")

*Resistor bands*

Here are relevant equations for resistors:

1. **Ohm's Law:**
   - $V = IR$
   - Ohm's Law relates the voltage (V$ across a resistor to the current (I$ flowing through it and the resistance (R$ of the resistor.

2. **Power Dissipation:**
   - $P = IV$
   - The power (P$ dissipated in a resistor is the product of the current (I$ and the voltage (V$ across it.

3. **Resistance in Series:**
   - $R_{\text{total}} = R_1 + R_2 + \ldots + R_n$
   - The total resistance (R_{\text{total}}$ in a series circuit is the sum of the individual resistances (R_1, R_2, \ldots, R_n$.

4. **Resistance in Parallel:**
   - $\frac{1}{R_{\text{total}}} = \frac{1}{R_1} + \frac{1}{R_2} + \ldots + \frac{1}{R_n}$
   - The reciprocal of the total resistance (\frac{1}{R_{\text{total}}}$ in a parallel circuit is the sum of the reciprocals of the individual resistances (\frac{1}{R_1} + \frac{1}{R_2} + \ldots + \frac{1}{R_n}$.

**Types of Resistors:**
   - Resistors come in various types, including fixed resistors (carbon film, metal film, and wirewound) and variable resistors (potentiometers and rheostats), each with specific applications and characteristics.

**Capacitor (C):** A capacitor is a two-terminal component that stores electrical energy in an electric field. It will not let electrons through but they will accumulate at one of its ends. In the water analogy we can visualize the capacitor as a balloon inside the pipe. The balloon can fill up until a certain point but it will never let the water get to the other end of the pipe. It is often used to smooth voltage fluctuations, filter signals, and store energy. There are all kinds of types of capacitors that have different properties. 

![Capacitor](assets/posts/2024-01-19-electronics-2/capacitor.webp "Capacitor")

*Types of capacitors*

Here are relevant equations for capacitors:

1. **Capacitance Equation:**
   - $C = \frac{Q}{V}$
   - The capacitance $C$ of a capacitor is equal to the charge $Q$ stored on one plate divided by the voltage $V$ across the plates.

2. **Energy Stored in a Capacitor:**
   - $U = \frac{1}{2}CV^2$
   - The energy $U$ stored in a capacitor is proportional to the square of the voltage $V$ across its plates.

3. **Time Constant $\tau$:**
   - $\tau = RC$
   - The time constant $\tau$ of an RC circuit is the product of the resistance $R$ and the capacitance $C$. It represents the time it takes for the capacitor to charge or discharge to approximately 63.2% of its final value.

4. **Charging and Discharging Capacitor Voltages:**
   - $V_c(t) = V_s \left(1 - e^{-\frac{t}{RC}}\right)$
   - $V_c(t)$ represents the voltage across a capacitor during charging, where $V_s$ is the source voltage.

   - $V_c(t) = V_0 e^{-\frac{t}{RC}}$
   - $V_c(t)$ represents the voltage across a capacitor during discharging, where $V_0$ is the initial voltage across the capacitor.

**Types of Capacitors:**
   - Capacitors come in various types, including electrolytic $C_{\text{elec}}$, ceramic $C_{\text{ceramic}}$, tantalum $C_{\text{tantalum}}$, and film $C_{\text{film}}$ capacitors, each with specific applications and characteristics.

**Inductor (L):** An inductor is a coil of wire that resists changes in the flow of electric current. It stores energy in a magnetic field. It is difficult to make an analogy with the water but as opposed to the balloon analogy, it will let the water pass through but it will keep a small reserve of water to keep it going if the water pressure diminishes. It is used in applications like filters, transformers, and energy storage.

![Inductor](assets/posts/2024-01-19-electronics-2/inductor.webp "Inductor")

*Types of coils*

Here are relevant equations for inductors:

1. **Inductance Equation:**
   - $L = \frac{\Phi}{I}$
   - The inductance L$ of an inductor is equal to the magnetic flux $\Phi$ linking the coil divided by the current $I$ flowing through it.

2. **Energy Stored in an Inductor:**
   - $U = \frac{1}{2}LI^2$
   - The energy $U$ stored in an inductor is proportional to the square of the current $I$ flowing through it.

3. **Time Constant $L/R$:**
   - $\tau = \frac{L}{R}$
   - The time constant $\tau$
    of an RL circuit is the ratio of inductance $L$ to resistance $R$. It represents the time it takes for the current in the inductor to reach approximately 63.2% of its final value.

4. **Self-Inductance $L$ and Mutual Inductance $M$:**
   - $V = L\frac{di}{dt} + M\frac{di_2}{dt}$
   - The voltage $V$ across an inductor is the sum of the self-inductance term $L\frac{di}{dt}$ and the mutual inductance term $M\frac{di_2}{dt}$, where $i$ is the current through the inductor, and $i_2$ is the current through another nearby inductor.

**Types of Inductors:**
   - Inductors come in various types, including air-core, iron-core, and toroidal inductors, each with specific applications and characteristics.

**Semiconductors:** Now a complicated topic which is required to understand both diodes and transistors. After doing plenty of research on it, I am still struggling to grasp the movement of electrons within semiconductors but I will try to explain it as good as I can. The most common semi-conductor material is silicon but germanium or gallium can also be used. 

**P-type Semiconductors:** P-type semiconductors are created by introducing impurities (dopants) with fewer electrons than the host material. Common p-type dopants include boron. Boron has 3 electrons in its valence shell while silicon has 4 electrons. There is a rule called the octet rule that says that to stabilize, atoms will try to have 8 electrons in there valence shell. The silicon atoms will share an electron with an adjacent atom to effectively double the amount of electrons they have. This way the silicon atoms have 8 electrons and they are stable. When we add boron which has 3 electrons in its outter shell, we will be left with holes where a silicon atom and the boron atom miss 1 electron to reach 8. This allows free moving electrons to come fill this hole.

![P-type](assets/posts/2024-01-19-electronics-2/ptype.webp "P-type")

*P-type boron doping. http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/dope.html*

**N-type Semiconductors:** N-type semiconductors result from introducing dopants with extra electrons, such as phosphorus or arsenic, into the crystal lattice. These extra electrons become charge carriers in the material, contributing to its conductivity. The extra electrons are able to move around easily.

![N-type](assets/posts/2024-01-19-electronics-2/ntype.webp "N-type")

*N-type boron doping. http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/dope.html*

**Doping:** Doping is the intentional introduction of specific impurities into a semiconductor crystal to modify its electrical properties. By carefully choosing dopants, engineers can control whether a semiconductor becomes p-type or n-type, allowing for the creation of various electronic components. It is important to understand that p-type and n-type semiconductors don't carry a positive or negative electric charge. Both n-type and p-type materials are still neutral because they have the same amount of electrons and protons.

**Electron Flow in semiconductors:** In semiconductors, when a voltage is applied, electrons can move through the crystal lattice. In n-type semiconductors, electrons are the primary charge carriers, while in p-type semiconductors, holes (missing electrons) act as charge carriers. The interaction between these charge carriers enables the controlled flow of current, forming the basis for electronic devices such as transistors and diodes in integrated circuits.

**Diode:** A diode is a semiconductor device that allows current to flow in one direction only. It has two terminals: an anode and a cathode. The anode is the p-type semiconductor while the cathode is the n-type semiconductor. The basic function of a diode is to act as a one-way valve for electric current, allowing it to flow in the forward direction while blocking it in the reverse direction. Diodes are used for various purposes in electronic circuits, such as rectification (converting AC to DC), signal demodulation, voltage regulation, and protection against reverse voltage. There are multiple diodes: LED (Light Emitting Diode), Rectifier diodes, etc. 

When a diode is idle with no external voltage the free electrons in the n-type part will move to fill some holes in the p-type part. It will create a small area called the depletion region where the p-type is negatively charged and the n-type is positively charged. 

If we connect the negative terminal of a battery on the n-type region of the diode and the positive terminal on the p-type region, we are in forward bias. The electrons coming from the negative terminal will be able to freely move in the n-type region and be attracted by the positively charged depletion region. When these electrons reach the depletion region, they can then travel through the holes in the p-type region.

![Forward bias](assets/posts/2024-01-19-electronics-2/forward.webp "Forward bias")

*Diode in forward bias mode*

If we connect the negtive terminal of a battery on the p-type region and the positive terminal on the n-type region, we are in reverse bias mode. The electrons coming from the negative terminal will be repelled by the negatively charged depletion region on the p-type. This will prevent the electricity from flowing. At a certain voltage, the diode can enter breakdown mode, meaning that it will conduct current in reverse bias mode. Breakdown is generally an undesired state for standard diodes but can be exploited in Zener diodes designed for voltage regulation. In other diodes, steps are taken to prevent breakdown to ensure proper functionality and reliability.

![Reverse bias](assets/posts/2024-01-19-electronics-2/reverse.webp "Reverse bias")

*Diode in reverse bias mode*

**Transistor:** Transistors are semiconductor devices that can be used as amplifiers, switches, or signal modulators. There are different types of transistors, including bipolar junction transistors (BJTs) and field-effect transistors (FETs). It is usually a combination of P-type semi-conductors and N-type semiconductors in a sandwich. Let's go through all the types of transistors.

![Transistor types](assets/posts/2024-01-19-electronics-2/transistors.webp "Transistor types")

*Families of transistors*

Here are some relevant equations for transistors:

1. **Bipolar Junction Transistor (BJT):**
   - $I_C = \beta \cdot I_B$
   - The collector current $I_C$ in a BJT is related to the base current $I_B$ by the current gain factor $\beta$.

   - $I_E = I_C + I_B$
   - The emitter current $I_E$ is the sum of the collector current $I_C$ and the base current $I_B$.

2. **Field-Effect Transistor (FET):**
   - $I_D = k \cdot (V_{GS} - V_{th})^2$
   - The drain current $I_D$ in a FET is related to the gate-source voltage $V_{GS}$ by the square of the voltage difference minus the threshold voltage $V_{th}$, with $k$ being a proportionality constant.


**NPN transistor:** An NPN transistor is a bipolar junction transistor with three layers – N-type (collector), P-type (base), and N-type (emitter). In operation, a small forward-biased current at the base controls a larger current flow from the collector to the emitter, allowing for amplification. The collector-base junction is reverse-biased. NPN transistors find applications in amplification, switching, and signal processing circuits. Their schematic symbol features an arrow pointing outward from the base terminal.

Note that the NPN is not symmetric. The emitter terminal is heavily doped compared to the collector and base.

![NPN transistor](assets/posts/2024-01-19-electronics-2/npn.webp "NPN transistor")

*NPN transistor https://www.electronics-tutorials.ws/transistor/tran_2.html*

Something I always struggle to understand is how the small current in the base-emitter junction allows a current to flow in reverse-bias through the collector to the emitter. I think that the current going through the base is negatively charged. The bigger the voltage, the more negatively charged it will be. This negative charge will repel the negatively charged depletion region in the PN junction and allow the current to flow through the emitter.

Transistors can be in 3 modes:

- Active Mode: Transistor amplifies signals; both junctions are forward-biased.
- Cut-off Mode: Transistor is off; both junctions are reverse-biased.
- Saturation Mode: Transistor is fully on, allowing maximum current flow; both junctions are forward-biased.

Let's check how to use the datasheet to compute the voltage required to put the transistor in active mode. For example the 2n2222 is a simple NPN transistor [https://www.onsemi.com/pdf/datasheet/p2n2222a-d.pdf](https://www.onsemi.com/pdf/datasheet/p2n2222a-d.pdf). On the specification, you can find all kinds of info such as the thermal resistance, maximum voltage, etc.

The $hFE$ of a transistor, often called the DC current gain or simply the beta (β) of the transistor. In the context of a transistor, $hFE$ is defined as the ratio of the collector current $I_C$ to the base current $I_B$ $\[ hFE = \frac{I_C}{I_B} \]$. It represents how much the collector current is amplified in relation to the base current. For example, if $hFE$ is 100, it means that a change in the base current will result in a 100 times larger change in the collector current. Beta is also called $hfe$. 

$V_{BE}$ stands for the "base-emitter voltage" in a bipolar junction transistor (BJT). It represents the voltage drop across the base-emitter junction of the transistor when the transistor is in forward active mode. In an NPN transistor, the $V_{BE}$ voltage is typically around 0.6 to 0.7 volts for silicon transistors. For PNP transistors, the $V_{BE}$ voltage is negative, and its magnitude is similar to that of NPN transistors.

Let's say we want to amplify a small input signal that oscillates between 0V and 1V with a 12V battery connected to the collector. We want to maximize the amplification. How do we do that?

1. **Connect the collector and emitter:** Connect the collector (C) of the 2N2222 to the positive terminal of the 12V battery.
Connect the emitter (E) of the 2N2222 to the ground (negative terminal) of the battery through an emitter resistor (RE). Use a resistor value (e.g., 470 ohms) that sets an appropriate bias point for the transistor.

2. **Connect the base:**  Connect the input signal source to the base (B) of the 2N2222 through a coupling capacitor (C1) to block the DC component of the input signal. 

3. **Determine the desired collector current:** Choose a collector current, $I_{CQ}$. Let's say $I_{CQ} = 1.5 \, \text{mA}$.

4. **Calculate $V_{BE}$:** Find the base-emitter voltage, $V_{BE}$, for the chosen collector current. Let's assume $V_{BE} = 0.7 \, \text{V}$.

5. **Determine $V_E$:** Calculate the voltage across the emitter resistor, $V_E$: $\[V_E = V_{BE} + I_{CQ} \cdot R_E\]$

6. **Calculate $V_{R2}$:** Determine the voltage across $R_2$, $V_{R2}$: $\[V_{R2} = V_{CC} - V_E\]$

7. **Select $R_2$:** Choose a reasonable value for $R_2$. Let's say $R_2 = 10 \, \text{k}\Omega$.

8. **Calculate $R_1$:** Use the formula $R_1 = \frac{V_{BE}}{I_B} - R_2$, where $I_B \approx \frac{I_{CQ}}{\beta}$. You might need to check the transistor datasheet for the value of $\beta$. Here's the computation for $R_1$: \[R_1 = \frac{V_{BE}}{I_B} - R_2\] and \[R_1 = \frac{V_{BE}}{\frac{I_{CQ}}{\beta}} - R_2\] Substitute the given values: $\[R_1 \approx \frac{0.7 \, \text{V}}{\frac{1.5 \, \text{mA}}{\beta}} - 10 \, \text{k}\Omega\]$ Note: Adjust $\beta$ based on the transistor's datasheet.

I highly recommend this awesome video here [https://www.youtube.com/watch?v=gnHuzM8PDrc](https://www.youtube.com/watch?v=gnHuzM8PDrc)

![Dumb amplification circuit](assets/posts/2024-01-19-electronics-2/amp.webp "Dumb amplification circuit")

*Dumb amplification circuit*

**PNP transistor:** A PNP transistor is essentially the reverse of an NPN transistor, characterized by a reversal in the polarities of its semiconductor layers. In a PNP configuration, a P-type semiconductor is positioned between two N-type layers, in contrast to an NPN transistor where an N-type semiconductor is between two P-type layers. This reversal results in a change in the direction of current flow; in a PNP transistor, current flows from the emitter (P-type) to the collector (N-type). The majority charge carriers in PNP transistors are holes, while NPN transistors rely on electrons. Despite these structural differences, both PNP and NPN transistors share similar functional principles, allowing for their interchangeability in many electronic circuit applications with appropriate adjustments for reversed polarities.

![PNP transistor](assets/posts/2024-01-19-electronics-2/pnp.webp "PNP transistor")

*PNP transistor*

**MOSFET transistor:** In the context of MOSFETs (Metal-Oxide-Semiconductor Field-Effect Transistors). When a negative voltage is applied to the gate with respect to the source, an electric field attracts holes toward the surface, forming a hole-rich channel. As the gate voltage becomes more negative, the channel conductivity increases, allowing holes to flow from the drain to the source. This controlled flow of holes represents the current through the P-channel MOSFET.

There are two main types: N-channel MOSFETs and P-channel MOSFETs. Similar to PNP and NPN transistors, these types exhibit structural and polarity differences. For N-channel MOSFETs: Current flows from the source to the drain when a positive voltage is applied to the gate with respect to the source. Electrons are the majority carriers. For P-channel MOSFETs: Current flows from the drain to the source when a negative voltage is applied to the gate with respect to the source. Holes are the majority carriers.

Use MOSFETs when high input impedance, low power consumption, and fast switching speeds are critical. They excel in digital applications and scenarios requiring minimal voltage drop in the on state. On the other hand, choose NPN BJTs for simpler amplification needs, especially in low-frequency applications. NPN BJTs can handle high voltage and may be easier to bias in certain situations. The decision should be based on the specific characteristics required by your application.

![MOSFET transistor](assets/posts/2024-01-19-electronics-2/mosfet.webp "MOSFET transistor")

*MOSFET transistor*

**JFET transistor:** A JFET (Junction Field-Effect Transistor) is a semiconductor device with a channel that regulates current flow between its source and drain terminals based on the voltage applied to its gate terminal. It comes in two types: N-channel (with electrons as majority carriers) and P-channel (with holes as majority carriers). JFETs operate as voltage-controlled resistors, where the width of the conducting channel is modulated by the gate-source voltage.

Notable features of JFETs include their high input impedance, making them suitable for applications where signal loading must be minimized. They are often employed in amplifier circuits, particularly in the input stages of audio amplifiers. JFETs can be advantageous in scenarios requiring simplicity, ease of biasing, and high input impedance. However, they are less common in modern integrated circuits compared to MOSFETs due to certain limitations.

It makes sense to use JFETs when high input impedance is critical, and where simplicity and ease of biasing are desired. Their application is particularly relevant in amplifier circuits where preserving signal integrity is crucial, such as in audio amplification stages. Additionally, JFETs can be considered in cases where the characteristics of high input impedance align with the specific requirements of the circuit.

![JFET transistor](assets/posts/2024-01-19-electronics-2/jfet.webp "JFET transistor")

*JFET transistor*

**Integrated Circuit (IC):** An integrated circuit is a miniaturized electronic circuit that contains a large number of interconnected semiconductor devices, such as transistors, resistors, capacitors, and diodes. ICs can perform complex functions and are the basis for modern electronic systems.

![Integrated Circuit](assets/posts/2024-01-19-electronics-2/ic.webp "Integrated Circuit")

*Integrated circuits examples*

**More on LED:** LEDs produce light through electroluminescence when a DC voltage is applied. Electrons and holes move through the semiconductor material, recombining at the N-P junction and releasing photons. The frequency (color) of the emitted light is determined by the energy of these photons, which in turn is influenced by the bandgap energy of the semiconductor material. Different semiconductor materials yield LEDs of various colors; for instance, gallium arsenide for red LEDs and gallium nitride for blue LEDs. The higher the bandgap energy, the shorter the wavelength, resulting in higher-frequency light. LEDs emit electromagnetic radiation in the form of light, with the color spectrum determined by the semiconductor properties, enabling a wide range of applications in lighting and display technologies.