I built a Rust and wgpu renderer to inspect the successive frames of a protein diffusion model. Instead of showing only a final structure, it lets me scrub through the denoising trajectory.

Atoms are rendered as Gaussian clouds using order-independent transparency. The cloud effect makes the intermediate steps easier to see, but the visual blur should not be read as calibrated model uncertainty.

I made a binary format called .efold to store the coordinates across frames. A compute shader highlights overlaps, and a dashboard displays RMSD and confidence values. These are diagnostics for inspection, not proof that a generated structure is physically valid.

Motion blur and chromatic aberration add a visual effect to the trajectory. They are rendering choices rather than scientific measurements.

<video controls width="100%">
  <source src="assets/posts/2026-05-06-protein-diffusion-viewer/video.mp4" type="video/mp4">
</video>
