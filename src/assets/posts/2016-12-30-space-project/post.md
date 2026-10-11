Space Project was a mobile game about flying between planets with different gravitational pulls. Players had to land without crashing and manage their fuel to reach the destination. Landing replenished fuel.

The Unity example below uses an inverse-square force between two objects. It is an illustrative gameplay model, not a realistic orbital simulation.

<img src="assets/posts/2016-12-30-space-project/1.webp" width="24%" alt="Game" title="Game" />

<img src="assets/posts/2016-12-30-space-project/2.webp" width="24%" alt="Game" title="Game" />

<img src="assets/posts/2016-12-30-space-project/3.webp" width="24%" alt="Game" title="Game" />

<img src="assets/posts/2016-12-30-space-project/4.webp" width="24%" alt="Game" title="Game" />

```csharp
public class GravitySimulator : MonoBehaviour
{
    public Rigidbody2D object1;
    public Rigidbody2D object2;

    // Gravitational constant (adjust as needed)
    public float gravitationalConstant = 6.67430f;

    void FixedUpdate()
    {
        ApplyGravity(object1, object2);
    }

    void ApplyGravity(Rigidbody2D attractingObject, Rigidbody2D attractedObject)
    {
        Vector2 direction = attractedObject.position - attractingObject.position;
        float distance = direction.magnitude;

        // Ensure objects are not too close to prevent division by zero
        if (distance > 0.1f)
        {
            float forceMagnitude = (gravitationalConstant * attractingObject.mass * attractedObject.mass) / (distance * distance);
            Vector2 force = direction.normalized * forceMagnitude;

            attractedObject.AddForce(-force);
        }
    }
}
```
