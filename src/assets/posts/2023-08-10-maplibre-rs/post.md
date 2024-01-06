A story about a great project which resulted in the publication of a paper in the ISPRS and me travelling to Florence to present said paper at Foss4g.

It all started with my former boss and mentor, Bertil Chapuis, suggesting I do a proof of concept project to render vector tiles using WebGPU. WebGPU is an emerging web standard and JavaScript API for low-level, high-performance access to graphics and computation.

I decided to do this prototype using Rust because of all the good things I had heard about it. Rust also has a great library for WebGPU called `wgpu-rs`. 

Learning both of these technologies at once had a steep learning curve. But the joy of having my first vector tile rendered on the screen was worth it all.

<img src="assets/posts/2023-08-10-maplibre-rs/1.webp" alt="Prototype" title="Prototype" />

*Screenshot from the prototype*

We used the Mapbox Vector Tile specification. It uses protocol buffers (.PBF) files to encode vector data. After parsing and loading the vector data, we have to tessellate it (triangulate) to transform the vector data into a set of triangles. Triangles is what we give to the GPU shaders. In quick, a shader is a program that runs on the GPU. We usually have two shaders, a vertex and a fragment shader. The vertex shader computes the position of vertices in 3d and the fragment shaders computes the color of each pixel on the screen.

Following up on this prototype, we decided to submit a paper at Foss4g as well as a presentation. Both were accepted and we got started on the paper.

Jump forward in time, we decided to collaborate with a brilliant ex-student from the university of Munich called Max which was working on a similar project with the same technologies that was more advanced than my prototype. This project then went into the maplibre foundation and became known as maplibre-rs. It was difficult but I managed to learn and participate a few features in the maplibre-rs project.

Along with Max, Bertil and Jens (another teacher at HEIG-VD) we wrote and published the paper. Later on we went to Foss4g and presented the paper together with Max.

Checkout the paper in the ISPRS [https://isprs-archives.copernicus.org/articles/XLVIII-4-W1-2022/35/2022/isprs-archives-XLVIII-4-W1-2022-35-2022.pdf](https://isprs-archives.copernicus.org/articles/XLVIII-4-W1-2022/35/2022/isprs-archives-XLVIII-4-W1-2022-35-2022.pdf).

Checkout maplibre-rs on Github [https://github.com/maplibre/maplibre-rs](https://github.com/maplibre/maplibre-rs).

<video autoplay loop muted>
  <source src="assets/posts/2023-08-10-maplibre-rs/1.mp4" type="video/mp4">
</video>

*Maplibre-rs demo in the web*