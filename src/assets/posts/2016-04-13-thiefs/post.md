I made an FPS prototype in Unity to learn how to calculate a shot direction and detect what it hit.

**Raycasting Unveiled**

A raycast checks where a ray from an origin in a given direction intersects an object. Here is a small Unity example.

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

In a hitscan weapon, the visible bullet or tracer can be separate from the hit calculation.

A ray from the camera finds the impact point immediately. The shot animation then shows that result. Projectile-based weapons work differently.

<img src="assets/posts/2016-04-13-thiefs/1.webp" alt="Game" title="Game" />

*Screenshots taken from the prototype*
