# Concepts

Electronics is based on one of the 4 fundamental forces, electromagnetism. Electromagnetism is the interaction between electric charges and currents, as well as their associated magnetic fields. It encompasses phenomena such as the generation of magnetic fields by electric currents, the induction of electric currents by changing magnetic fields, and the fundamental relationship described by Maxwell's equations. Let's define some words.

**Atom:** An atom is the basic unit of a chemical element, consisting of a nucleus containing protons and neutrons, surrounded by electrons in orbitals. The number of protons in the nucleus determines the element's identity, while the combination of protons and neutrons determines its atomic mass. Electrons, which orbit the nucleus in specific energy levels or shells, are involved in chemical reactions and the formation of molecules. The arrangement of electrons in these shells contributes to the chemical properties of an element.

**Electric charges:** Electric charges are fundamental properties of matter that can be positive or negative. Like charges repel each other, while opposite charges attract. The unit of electric charge is the coulomb (C). Electrons have a negative charge. Neutrons are neutral, having no net electric charge.

**Ions:** An ion is an atom or molecule that has gained or lost electrons, resulting in a net electric charge. If an atom gains electrons, it becomes negatively charged (anion), and if it loses electrons, it becomes positively charged (cation). Ions can have a positive or negative electric charge. So, while an electric charge is a general term referring to the property of having a positive or negative charge, an ion specifically refers to an atom or molecule with a net electric charge due to the gain or loss of electrons.

**Electrons shells:** The number of electron shells, or energy levels, in an atom is determined by the principal quantum number (n). Electrons occupy these shells around the nucleus, and each shell has a maximum number of electrons it can hold. The first shell (n = 1) can hold up to 2 electrons, the second shell (n = 2) can hold up to 8 electrons, the third shell (n = 3) can hold up to 18 electrons, and so on. The electron configuration of an atom describes how its electrons are distributed among these shells. For example Lithium has 3 protons and 3 electrons. In the first Shell (n = 1): it has 2 electrons, and in the second Shell (n = 2) there is one electron. The second shell can hold up to 8 electrons. The electrons balance the positive charge of the protons, resulting in an overall neutral charge for the atom.

**Valence shell:** The valence shell of an atom is the outermost electron shell. It is the highest-numbered electron shell that contains electrons. The electrons in the valence shell are called valence electrons. The number of valence electrons largely determines the chemical properties and reactivity of an element. For example, in lithium (Li), the valence shell is the second shell, and it contains one valence electron. The valence electrons are crucial in chemical bonding and interactions with other atoms. Elements in the same column or group of the periodic table often have similar valence electron configurations and therefore share similar chemical properties.

**Electrons:** Electrons move around atoms due to their interaction with electric fields. The behavior of electrons is governed by the principles of quantum mechanics. Here are a few key points that explain why electrons move around.

**Free Electrons:** In Conductors: In conductive materials, some electrons are loosely bound and are relatively free to move within the material. When an electric field is applied across a conductor, these free electrons can drift in response to the applied voltage, creating an electric current.

**Covalent Bond Formation:** Covalent bonds form when atoms have a tendency to gain electrons (electron acceptors) and other atoms have a tendency to lose electrons (electron donors). Instead of transferring electrons completely, they share electrons to achieve stability. Covalent bonding is prevalent in molecular compounds, where atoms share electrons to form molecules. Examples include water (H₂), methane (CH₄), and oxygen (O₂).

**Metal:** Metals are characterized by having a "sea of electrons" model. In a metal, the outer electrons of atoms become delocalized, meaning they are not tightly bound to any specific nucleus and are free to move throughout the material. These free electrons are responsible for the high electrical conductivity of metals.

Ok so all of this is cool but how does it apply to electronics. Well we know that electrons can flow in a conductive material and that electrons have a negative charge which will repel other negative charges. We still need to understand where to find a source of electrons.

**Currents:** Current is the flow of electric charge in a conductor, measured in amperes (A). It is driven by a potential difference, such as voltage (V), which provides the force for electrons to move. Current flows from the positive to negative terminal in a circuit, opposite to the direction of electron movement. In direct current (DC), electrons move consistently in one direction, while in alternating current (AC), electrons oscillate back and forth. The relationship between current (I), voltage (V), and resistance (R) is described by Ohm's Law: I = V/R.

**Analogy with water, voltage (V):**: Imagine water flowing through a hose. The force with which the water is pushed through the hose is like voltage. The higher the pressure, the more forcefully the water moves. Similarly, voltage represents the electrical pressure that drives the flow of electrons in a circuit.

**Analogy with water, Resistance (R):** Now, consider a narrow section in the water pipe. The narrow section restricts the flow of water, creating resistance. In electrical circuits, resistance is like obstacles that make it harder for electrons to flow. Materials with high resistance are like narrow pipes, impeding the flow of current. A resistance will create a drop in the pressure (voltage) and affect the quantity of water that is able to pass through the pipe.

**Analogy with water, Current (I):** Current is simply a measure of the flow of water in the entire pipe. If you take any point in the pipe and measure the water flow for a certain amount of time, it will be the same anywhere in the pipe. The flow of water will depend on the pressure of the water and the resistance. In electricity the current is the amount of electrons flowing through the pipe and it is measured in amperes.

![Analogy with water](assets/posts/2024-01-19-electronics-1/analogy.webp "Analogy with water")

*Analogy with water, source: https://learn.sparkfun.com/tutorials/transistors/extending-the-water-analogy*

**How to generate a current:** There are multiple ways to generate a current. We can use chemical reactions such as in Alkaline batteries, we can use photovoltaic cells or we can use moving magnetic fields, thermoelectric effect (heat) or even piezoelectric effect.

**Chemical Reactions (Alkaline Batteries)**: Chemical reactions, as in alkaline batteries, involve the conversion of chemical energy into electrical energy. The reactions between materials in the battery lead to the release and flow of electrons, creating an electric current. Check out [https://www.youtube.com/watch?v=9OVtk6G2TnQ](https://www.youtube.com/watch?v=9OVtk6G2TnQ). In alkaline batteries, the electrons come from the oxidation reaction that occurs at the anode. Specifically, zinc undergoes oxidation at the anode, producing zinc ions $\text{Zn}^{2+}$ and releasing electrons.

**Photovoltaic Cells (Solar Cells):** Photovoltaic cells, also known as solar cells, convert sunlight directly into electricity through the photovoltaic effect. When photons from sunlight strike the semiconductor material of the solar cell, electrons are released, creating an electric current.

**Moving Magnetic Fields (Generators):** Faraday's law of electromagnetic induction explains how moving a magnet within a coil of wire or changing the magnetic field induces an electromotive force (EMF) in the wire. This induced EMF can drive an electric current in a circuit, as seen in electric generators. For example, in a nuclear plant, we actually generate heat by triggering nuclear fission in a chain reaction with heavy materials such as Uranium. When nuclear fission generates heat, it will in turn turn water to steam and the steam will push a turbine. This turbine contains magnets and induces a magnetic field (see below for more) that will generate a current and thus electricity. To understand nuclear fission requires to delve into nuclear forces and we won't do that here. But exploring fission and fusion might be an interesting topic for later.

**Thermoelectric Effect:** The thermoelectric effect involves generating electric current from a temperature gradient. When a temperature difference exists between the two ends of a conductive material, it can induce the movement of electrons, creating a voltage potential and generating an electric current.

**Piezoelectric Effect:** The piezoelectric effect occurs in certain materials where mechanical stress induces an electric charge (direct effect), or an applied electric field causes mechanical deformation (converse effect). This bidirectional coupling is utilized in sensors, actuators, and energy harvesting devices, converting mechanical vibrations into electrical energy. Common materials include crystals like quartz and certain ceramics.

**Magnetic fields:** A magnetic field is like an invisible force around magnets and things with moving electricity. This field has both direction and strength, typically represented by magnetic field lines. The field plays a crucial role in interactions between magnetic materials and is fundamental in electromagnetism, influencing the behavior of charged particles and contributing to various technological applications, such as electric motors and magnetic storage devices. We don't have to understand exaclty why this magnetic field exists. It is rooted in quantum mechanics and difficult to understand but you can read the magnetic moment section below if you want a slightly deeper explanation. Also check out these images below to visualize the magnetic field.

![Magnetic field](assets/posts/2024-01-19-electronics-1/magnetic1.webp "Magnetic field")
![Magnetic field](assets/posts/2024-01-19-electronics-1/magnetic2.webp "Magnetic field")
![Magnetic field](assets/posts/2024-01-19-electronics-1/magnetic3.webp "Magnetic field")

**Magnetic moment:** The magnetic moment of an atom is a quantum physics concept arising from the intrinsic properties of electrons, including spin and orbital angular momentum. Electrons contribute to the overall magnetic moment, influencing how atoms respond to magnetic fields. In materials like metals, alignment of these magnetic moments creates magnetic domains. Exposure to an external magnetic field can induce alignment, turning the material into a magnet. The understanding of magnetic moments is rooted in quantum mechanics, describing particle behavior at atomic and subatomic scales.

**Faraday's law:** A changing magnetic field around a conductor induces the generation of an electromotive force (EMF) or voltage in the conductor.  The mathematical representation of Faraday's Law is given by: 

$\text{EMF} = - \frac{\Delta \Phi}{\Delta t}$ 
​
Where:

- $\text{EMF}$ is the induced electromotive force (in volts).
- $\Delta \Phi$ is the change in magnetic flux.
- ${\Delta t}$ is the change in time.

Faraday's Law also provides the direction of the induced current using Lenz's Law, which states that the induced current will flow in a direction that opposes the change in magnetic flux.

Applications: Faraday's Law is fundamental to the operation of electric generators, transformers, and various electrical devices. It is the principle behind the conversion of mechanical energy into electrical energy in generators.

**Lorentz force:** The Lorentz force ($\(\mathbf{F}\)$) acting on a charged particle moving with velocity ($\(\mathbf{v}\)$) in a magnetic field ($\(\mathbf{B}\)$) is given by the equation:

$\[ \mathbf{F} = q(\mathbf{v} \times \mathbf{B}) \]$

Where:
- $\(\mathbf{F}\)$ is the force,
- $\(q\)$ is the charge of the particle,
- $\(\mathbf{v}\)$ is the velocity of the particle, and
- $\(\mathbf{B}\)$ is the magnetic field.

**Maxwell's laws:** Maxwell's equations are a set of four fundamental equations that collectively describe classical electromagnetism. They are derived from Faraday's law of electromagnetic induction. These 4 laws should comprise all previous laws defined by Faraday, Lenz, etc. Here's a simplified explanation:

1. **Gauss's Law for Electricity (Maxwell's First Equation):**
   $\[ \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0} \]$
   The divergence of the electric field $\(\mathbf{E}\)$ is proportional to the charge density $\(\rho\)$.

2. **Gauss's Law for Magnetism (Maxwell's Second Equation):**
   $\[ \nabla \cdot \mathbf{B} = 0 \]$
   The divergence of the magnetic field $\(\mathbf{B}\)$ is zero.

3. **Faraday's Law of Induction (Maxwell's Third Equation):**
   $\[ \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \]$
   The curl of the electric field $\(\mathbf{E}\)$ is proportional to the rate of change of the magnetic field $\(\mathbf{B}\)$.

4. **Ampère's Circuital Law with Maxwell's Addition (Maxwell's Fourth Equation):**
   $\[ \nabla \times \mathbf{B} = \mu_0 (\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}) \]$
   The curl of the magnetic field $\(\mathbf{B}\)$ is proportional to the sum of electric current density $\(\mathbf{J}\)$ and the rate of change of the electric field $\(\mathbf{E}\)$.

- $\(\mathbf{E}\$) - Electric Field: Represents the force experienced by a charged particle in an electric field. Units: Volts per meter $(V/m)$.

- $\(\mathbf{B}\)$ - Magnetic Field: Describes the strength and direction of the magnetic force on a moving charged particle. Units: Tesla $(T)$ or Gauss $(G)$.

- $\(\rho\)$ - Charge Density: Represents the amount of electric charge per unit volume. Units: Coulombs per cubic meter $(C/m³)$.

- $\(\mathbf{J}\)$ - Electric Current Density: Describes the flow of electric charge per unit area. Units: Amperes per square meter $(A/m²)$.

- $\(\varepsilon_0\)$ - Permittivity of Free Space: Represents the electric constant or permittivity of free space. Its value is approximately $\(8.85 \times 10^{-12} \, \text{C}^2/\text{N}\cdot\text{m}^2\)$.

- $\(\mu_0\)$ - Permeability of Free Space: Represents the magnetic constant or permeability of free space. Its value is approximately $\(4\pi \times 10^{-7} \, \text{T}\cdot\text{m}/\text{A}\)$.

**Photons:** A photon is a fundamental particle of light and other forms of electromagnetic radiation. It is a quantum of the electromagnetic field, carrying energy and momentum. Photons have no mass and travel at the speed of light in a vacuum. They exhibit both wave-like and particle-like properties, and their energy is directly proportional to their frequency, as described by the equation $E=h⋅f$, where $E$ is energy, $h$ is Planck's constant, and $f$ is frequency. Photons play a crucial role in the transmission of energy in the form of electromagnetic waves, including visible light, radio waves, microwaves, and X-rays.

**Light and heat:** The electromagnetic force governs the behavior of light. Light consists of photons, which are particles that represent packets of electromagnetic energy. The frequency at which the associated magnetic field oscillates determines the color of light. Infrared frequencies, beyond the visible spectrum, are associated with heat. When atoms experience heat, they absorb energy and emit photons, often in the infrared range, contributing to the sensation of warmth. In summary, light is composed of photons with specific frequencies, and heat causes the emission of photons, particularly in the infrared part of the electromagnetic spectrum.

# Components

A follow-up on the previous chapter, we will look at electronic components we can use and how to create circuits to solve actual problems.

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

You can easily find datasheets for transistors where you can find all kinds of info such as the thermal resistance, maximum voltage, etc.

The $hFE$ of a transistor, often called the DC current gain or simply the beta (β) of the transistor. In the context of a transistor, $hFE$ is defined as the ratio of the collector current $I_C$ to the base current $I_B$ $\[ hFE = \frac{I_C}{I_B} \]$. It represents how much the collector current is amplified in relation to the base current. For example, if $hFE$ is 100, it means that a change in the base current will result in a 100 times larger change in the collector current.

$V_{BE}$ stands for the "base-emitter voltage" in a bipolar junction transistor (BJT). It represents the voltage drop across the base-emitter junction of the transistor when the transistor is in forward active mode. In an NPN transistor, the $V_{BE}$ voltage is typically around 0.6 to 0.7 volts for silicon transistors. For PNP transistors, the $V_{BE}$ voltage is negative, and its magnitude is similar to that of NPN transistors.

Here are some steps to connect a transistor as an amplifier.

1. **Connect the collector and emitter:** Connect the collector (C) of the transistor to the positive terminal of the 12V battery.
   Connect the emitter (E) of the transistor to the ground (negative terminal) of the battery through an emitter resistor (RE). Use a resistor value (e.g., 470 ohms) that sets an appropriate bias point for the transistor.

2. **Connect the base:**  Connect the input signal source to the base (B) of the transistor through a coupling capacitor (C1) to block the DC component of the input signal.

3. **Determine the desired collector current:** Choose a collector current, $I_{CQ}$. Let's say $I_{CQ} = 1.5 \, \text{mA}$.

4. **Calculate $V_{BE}$:** Find the base-emitter voltage, $V_{BE}$, for the chosen collector current. Let's assume $V_{BE} = 0.7 \, \text{V}$.

5. **Determine $V_E$:** Calculate the voltage across the emitter resistor, $V_E$: $\[V_E = V_{BE} + I_{CQ} \cdot R_E\]$

6. **Calculate $V_{R2}$:** Determine the voltage across $R_2$, $V_{R2}$: $\[V_{R2} = V_{CC} - V_E\]$

7. **Select $R_2$:** Choose a reasonable value for $R_2$. Let's say $R_2 = 10 \, \text{k}\Omega$.

8. **Calculate $R_1$:** Use the formula $R_1 = \frac{V_{BE}}{I_B} - R_2$, where $I_B \approx \frac{I_{CQ}}{\beta}$. You might need to check the transistor datasheet for the value of $\beta$. Here's the computation for $R_1$: \[R_1 = \frac{V_{BE}}{I_B} - R_2\] and \[R_1 = \frac{V_{BE}}{\frac{I_{CQ}}{\beta}} - R_2\] Substitute the given values: $\[R_1 \approx \frac{0.7 \, \text{V}}{\frac{1.5 \, \text{mA}}{\beta}} - 10 \, \text{k}\Omega\]$ Note: Adjust $\beta$ based on the transistor's datasheet.

I highly recommend this awesome video here [https://www.youtube.com/watch?v=gnHuzM8PDrc](https://www.youtube.com/watch?v=gnHuzM8PDrc). Take a look at the next post for a better example on how to use a NPN transistor.

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

**Triac:** A triac, or triode for alternating current, is a semiconductor device commonly used in AC power control applications. It acts as a bidirectional switch, allowing current to flow in both directions when triggered. Triacs consist of three layers of semiconductor material and can be triggered into conduction by a small gate current. Once triggered, a triac remains conducting until the current falls below a certain threshold. Triacs are frequently used in dimmer switches, motor speed control, and other applications where precise control of AC power is needed. Their bidirectional nature makes them suitable for controlling both halves of an AC waveform.

![Triac Circuit](assets/posts/2024-01-19-electronics-2/triac.webp "Triac Circuit")

*Triac circuit https://www.electricaltechnology.org/2021/04/difference-diac-triac.html*

**Relay:** A relay is an electromagnetic switch that uses a small electric current to control the flow of a larger current in an electrical circuit. It consists of an electromagnet and a set of contacts that open or close when the electromagnet is energized. Relays are commonly used to control high-power devices with low-power signals, providing isolation between the control circuit and the load. They play a crucial role in applications such as automation, industrial control systems, and electrical protection. Relays are versatile and come in various types, including electromagnetic relays, solid-state relays, and reed relays, each tailored to specific needs. Relays have mechanical components, like contacts, that can wear out over time, leading to reduced reliability and a limited operational lifespan. Additionally, their switching speed is comparatively slower than semiconductor devices, and they may produce audible noise during operation due to the mechanical movement.

![Relay Circuit](assets/posts/2024-01-19-electronics-2/triac.webp "Relay Circuit")

*Relay circuit https://library.automationdirect.com/what-is-a-relay/*

**Solid State Relay (SSR:)** A Solid-State Relay (SSR) is an electronic switch utilizing semiconductor devices for current switching, eliminating the need for mechanical contacts. SSRs offer advantages such as the absence of moving parts, providing enhanced reliability and durability, fast switching speeds suitable for applications requiring rapid control, and electrical isolation for increased safety. The quiet operation, long lifespan due to reduced wear and tear, and versatility in supporting both AC and DC applications make SSRs well-suited for a wide range of scenarios requiring precise and accurate switching. However, they may be comparatively more expensive, have limitations on surge current capability, and require proper heat management due to potential heat generation during operation. Despite these disadvantages, the benefits of reliability, speed, and longevity make SSRs a preferred choice in many electronic and control systems.

![SSR Circuit](assets/posts/2024-01-19-electronics-2/ssr.webp "SSR Circuit")

*SSR https://instrumentationtools.com/what-is-a-solid-state-relay-working-principle-types-of-control/*

# Circuits

A follow-up on the previous chapter, we will look at electronic circuits.

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
