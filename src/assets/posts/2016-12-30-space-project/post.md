Welcome to Space Project, an exciting mobile game that puts your piloting skills to the test! You control a spaceship navigating through space, but here's the twist – each planet you encounter has its unique gravity. Landing safely on each planet without crashing becomes a thrilling challenge, requiring precision and technique.

Your ultimate goal is to reach a distant planet without running out of fuel. To achieve this, you must carefully harvest the gravitational force from planets along your journey. Each successful landing replenishes your fuel reserves, ensuring you have enough power to continue your cosmic voyage.

As you glide through the cosmos, the game becomes a delicate balance of gravity management and precise landings. Each planet's gravitational pull adds a layer of complexity, making every descent a strategic decision. The challenge intensifies as you navigate through different planetary systems, requiring adaptability and quick thinking.

Space Project offers a unique blend of skill-based gameplay and interstellar strategy. Can you master the art of gravity harvesting and safely land on each planet to reach your distant destination? It's time to embark on a cosmic adventure where gravity is your ally, and precision is your key to conquering the stars. 🚀🪐✨

<img src="assets/posts/2016-12-30-space-project/1.webp" width="24%" alt="Game" title="Game" />
<img src="assets/posts/2016-12-30-space-project/2.webp" width="24%" alt="Game" title="Game" />
<img src="assets/posts/2016-12-30-space-project/3.webp" width="24%" alt="Game" title="Game" />
<img src="assets/posts/2016-12-30-space-project/4.webp" width="24%" alt="Game" title="Game" />

*Screenshots taken from the prototype*

Simulating gravity within Unity can be a straightforward task. Below is a sample code that calculates gravitational forces based on the masses and distances between two objects. No need to delve into Einstein's relativity theorem for this basic implementation:

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