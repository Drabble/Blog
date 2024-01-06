This project was a prototype to test multiple things. 

- Shaders
- Procedural terrain generation
- Active ragdolls

<video autoplay loop muted>
  <source src="assets/posts/2020-03-12-ship-wreck/2.mp4" type="video/mp4">
</video>

<video autoplay loop muted>
  <source src="assets/posts/2020-03-12-ship-wreck/1.mp4" type="video/mp4">
</video>

<video autoplay loop muted>
  <source src="assets/posts/2020-03-12-ship-wreck/3.mp4" type="video/mp4">
</video>

*Recordings from the game*

**Shader Implementation: A Technical Overview**

Within the scope of this project, the integration of custom shaders played a pivotal role in shaping the visual aesthetics and rendering of the virtual environment. Shaders, in the context of computer graphics, are specialized programs designed to manipulate the appearance of graphical elements. Specifically, there are two primary types of shaders employed in this project: vertex shaders and pixel shaders.

1. Vertex Shaders:

Vertex shaders operate on the individual vertices of 3D models, determining their final positions in the rendered scene. These shaders are responsible for transformations such as translations, rotations, and scaling, crucial for placing objects accurately within the virtual space. In the case of our pirate game prototype, vertex shaders were meticulously crafted to handle dynamic movements of game elements, contributing to realistic animations and responsive interactions.

2. Pixel Shaders (Fragment Shaders):

Pixel shaders, or fragment shaders, function at the pixel level, influencing the color and lighting of each individual pixel on the screen. These shaders play a crucial role in determining the final appearance of surfaces by applying various effects such as lighting models, textures, and atmospheric conditions. In our project, pixel shaders were tailored to achieve specific visual effects, such as realistic water simulation and dynamic lighting, adding depth and authenticity to the virtual world.

**Procedural Terrain Generation with Perlin Noise: Technical Insights**

In the development of our pirate game prototype, a key technical component was the implementation of procedural terrain generation, leveraging Perlin noise algorithms. This approach allowed for the automatic creation of diverse and realistic landscapes, providing a dynamic and immersive game environment.

1. Perlin Noise Algorithm:

Perlin noise, developed by Ken Perlin, is a gradient noise function widely used for procedural texture and terrain generation. The algorithm produces smooth, continuous random-like patterns that are essential for creating natural-looking terrains. In our project, the Perlin noise algorithm served as the foundation for synthesizing complex and organic terrain features.

2. Terrain Heightmap Generation:

The Perlin noise algorithm was applied to generate a heightmap, a 2D grid of values representing elevations across the terrain. By controlling the parameters of the Perlin noise function, such as frequency and amplitude, we could shape the terrain's characteristics, ranging from rolling hills to rugged mountains. The resulting heightmap served as the blueprint for the virtual landscape, ensuring a level of detail and randomness that mirrors real-world terrains.

3. Seamless Terrain Transitions:

To avoid abrupt changes in terrain features, seamless transitions between different Perlin noise patterns were implemented. This technique prevented jarring shifts in elevation or terrain types, contributing to a more cohesive and natural visual experience for players as they navigate the virtual world.

4. Dynamic Terrain Adaptation:

Procedural terrain generation using Perlin noise enabled the creation of dynamic and adaptive landscapes. As the player explores the game environment, the terrain evolves in real-time, responding to parameters like player location or in-game events. This dynamic adaptation ensures a constantly changing and engaging landscape, enhancing player immersion and exploration.

5. Optimization Considerations:

Given the computational intensity of procedural terrain generation, optimization strategies were implemented to balance visual quality with performance. Techniques such as level of detail (LOD) adjustments and smart caching were employed to ensure smooth real-time generation without compromising the overall gaming experience.

In conclusion, the integration of procedural terrain generation with Perlin noise in our project showcases a technical approach to creating diverse, realistic, and dynamic landscapes. The use of this algorithm empowers the virtual world with an organic and ever-changing topography, contributing significantly to the overall depth and immersion of the gaming experience.

**Active Ragdoll Character Controller: Technical Implementation**

In the development of our pirate game prototype, a pivotal technical element was the incorporation of an active ragdoll character controller. This advanced system brought a heightened level of realism to character movements, utilizing physics-based simulations for dynamic responses to the in-game environment.

1. Physics-Based Simulation:

At the core of the active ragdoll character controller is a physics-based simulation engine. This engine governs the movements of in-game characters by simulating the physical forces and interactions that would occur in a real-world scenario. Forces such as gravity, collisions, and external impacts are calculated in real-time, influencing the motion and behavior of the ragdoll characters.

2. Ragdoll Dynamics:

The term "ragdoll" refers to the simulation of a character's body as a limp, articulated structure, akin to a puppet with dynamic joints and limbs. In our project, the ragdoll dynamics were intricately modeled to mimic the natural movement and response of a character's body to external stimuli. This includes factors like joint constraints, limb flexibility, and the influence of external forces on the ragdoll's overall behavior.

3. Real-Time Adaptability:

An essential feature of the active ragdoll character controller is its real-time adaptability to the in-game environment. As characters traverse varied terrains, engage in combat, or encounter obstacles, the ragdoll system dynamically adjusts the character's movements to reflect the changing conditions. This adaptability enhances the immersion of the gaming experience, as characters respond organically to the challenges and interactions presented within the virtual world.

4. Collision Detection and Response:

To achieve lifelike interactions, the active ragdoll system employs sophisticated collision detection algorithms. These algorithms identify when a character comes into contact with objects or other characters in the game, triggering appropriate responses in the ragdoll dynamics. Whether stumbling over uneven terrain or reacting to a forceful impact, the ragdoll character controller ensures realistic and visually convincing animations.

5. User-Defined Parameters:

The active ragdoll character controller in our project allowed for the adjustment of various parameters, empowering developers to fine-tune the system according to the specific requirements of the game. This includes parameters governing joint stiffness, damping, and the overall responsiveness of the ragdoll, providing a high degree of customization to achieve the desired level of realism.

In conclusion, the integration of an active ragdoll character controller in our pirate game prototype showcases a technical commitment to achieving realistic and adaptive character animations. Through the application of physics-based simulations and dynamic ragdoll dynamics, this system contributes significantly to the overall immersion and authenticity of character movements within the virtual environment.

<img src="assets/posts/2020-03-12-ship-wreck/1.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/2.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/3.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/4.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/5.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/6.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/1.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/2.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/3.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/4.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/5.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/6.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/7.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/8.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/9.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/10.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/11.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/12.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/13.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/14.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/15.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/16.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/17.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/18.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/19.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/20.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/21.webp" width="49%" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/22.webp" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/23.webp" alt="Game" title="Game" />
<img src="assets/posts/2020-03-12-ship-wreck/24.webp" alt="Game" title="Game" />

*Screenshots taken from the game*
