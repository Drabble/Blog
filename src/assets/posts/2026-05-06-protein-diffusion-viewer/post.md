I built a molecular renderer with Rust and wgpu specifically to visualize how AI "denoises" protein structures. It's meant to show the whole trajectory as the model figures out the protein's shape.

<video controls width="100%">
  <source src="assets/posts/2026-05-06-protein-diffusion-viewer/video.mp4" type="video/mp4">
</video>

**Stochastic Point Splatting**
I'm rendering atoms as Gaussian clouds. The "fuzziness" actually represents the AI's uncertainty. I used order-independent transparency so you can look through these clouds and see the structure forming inside.

**Custom Data Pipeline**
I made a binary format called .efold to store all the 3D frames of the denoising steps. It's optimized so you can scrub through the timeline quickly.

**Real-time Diagnostics**
There's a compute shader that checks for physical violations, like atoms overlapping too much, and highlights them in neon pink. I also added a dashboard to track RMSD and confidence levels as it runs.

**Visual Effects**
To get that "hallucination" feel, I added things like motion blur and chromatic aberration in areas where the AI is most uncertain. It all runs in a dark "Obsidian" theme.
