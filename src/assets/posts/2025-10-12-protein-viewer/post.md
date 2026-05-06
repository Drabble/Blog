I've been working on a high-performance molecular visualization engine using Rust, wgpu, and hecs. It's designed to handle really large datasets, even over 50 million atoms, while staying interactive in real-time.

<video controls width="100%">
  <source src="assets/posts/2025-10-12-protein-viewer/video.mp4" type="video/mp4">
</video>

**High-Performance Architecture**

The main idea behind this project is what I call Zero-Mesh Rendering. Instead of the usual way of making spheres out of polygons, I used GPU techniques to keep things fast even with huge proteins.

**Raycasted Billboards**
Every atom is just a single quad. Inside the shader, I handle the ray-sphere intersection. This gives perfect curvature no matter how much you zoom in, and the depth is calculated per-pixel so occlusion looks right.

**ECS and Performance**
I used hecs to manage all the atoms. It helps with data locality which is great for keeping the frame rate high when doing visibility checks.

**Dynamic LOD**
The engine scales the detail based on how far the camera is. When you're close, you see everything, but it simplifies things further away to keep things smooth.

**Asynchronous Pipeline**
All the heavy lifting like parsing PDB files happens in the background. This keeps the UI responsive so there's no stuttering when loading new structures.

![Protein Rendering](assets/posts/2025-10-12-protein-viewer/image.jpg)
