Lately, I've been on the hunt for some cool, practical projects involving LLMs. I'm convinced there's massive potential for them to boost video game development speed, particularly in asset pipelines, but it definitely feels like the tech still needs to mature a bit.

While exploring that space, I specifically wondered about texturing 3D models with AI. Could LLMs help here? This led me to discover tools like ControlNet, which let you influence image generation from models like Stable Diffusion or Flux by providing structural guides, like a depth map.

That's where the core idea for this project hit me. A 3D model already contains all the depth information needed! So, the approach became: Render the 3D model from multiple viewpoints to get its depth maps. Feed those depth maps into the AI model to generate corresponding 2D images. The key step then is to take those generated 2D images and project them back onto the 3D model from the exact same original camera perspective, using the model's UV coordinates to save the projected visuals into a texture.

This seemed like a really promising way to integrate generative AI into a tangible 3D workflow.

Let's jump into a quick demo:

<video autoplay loop muted>
  <source src="assets/posts/2025-04-21-3dtex/1.mp4" type="video/mp4">
</video>
