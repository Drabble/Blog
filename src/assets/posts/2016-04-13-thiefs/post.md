Diving into creating an FPS game was a cool experience. Getting hands-on with raycasting and figuring out how FPS games calculate the bullet direction from the cursor position was especially interesting. Let me break it down a bit:

**Raycasting Unveiled**

Raycasting involves a blend of geometry and math wizardry to precisely determine where a ray intersects with the game world. At its core, it's about shooting a ray along a vector direction from an origin and finding where it hits an object. Here's a sample c# code with Unity:

Define the Ray:

```csharp
Vector3 rayOrigin = camera.position;
Vector3 rayDirection = camera.forward;
```

Shoot the Ray:

```csharp
RaycastHit hitInfo;
if (Physics.Raycast(rayOrigin, rayDirection, out hitInfo))
{
    // Intersection point is hitInfo.point
    // The hit object is hitInfo.collider.gameObject
}
```

In this snippet, Physics.Raycast is a common function that simulates shooting a ray in the defined direction. If it hits an object, it provides information about the point of intersection and the object that was hit.

**Behind the Bullet: Visuals vs. Reality**

Ever wondered why shooting from point-blank range in FPS games sometimes feels a bit off? Well, here's the scoop: in many FPS games, the bullet you see firing from your gun is primarily for visual flair. The real action happens through the invisible force of raycasting.

When you pull the trigger, the game instantly calculates the impact point using a ray cast from your camera. So, that bullet you see traveling through the air is more like a cinematic touch, while the actual hit is determined by the rapid computational wizardry of raycasting.

<img src="assets/posts/2016-04-13-thiefs/1.webp" alt="Game" title="Game" />

*Screenshots taken from the prototype*