I've been building a molecular viewer in Rust with wgpu and hecs. The goal is to keep very large atom datasets interactive without giving every atom a polygon mesh.

Each atom is drawn as a billboard. The shader intersects a ray with a sphere and calculates depth per pixel, so the atom has a curved silhouette and can occlude other atoms. hecs manages the atom data, and level of detail reduces the work for distant objects.

PDB parsing runs in the background so loading a structure does not block the interface.

<video controls width="100%">
  <source src="assets/posts/2025-10-12-protein-viewer/video.mp4" type="video/mp4">
</video>

![Protein Rendering](assets/posts/2025-10-12-protein-viewer/image.jpg)
