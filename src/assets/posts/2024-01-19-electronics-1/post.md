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