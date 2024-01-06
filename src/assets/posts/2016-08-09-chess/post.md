I made a 3D chess game set in a forest. The goal was to make something fun and learn how to implement efficiently the rules of chess. Then try to write some AI capable of playing chess better than me (which is not very difficult).

<img src="assets/posts/2016-08-09-chess/1.webp" alt="Game" title="Game" />
<img src="assets/posts/2016-08-09-chess/2.webp" alt="Game" title="Game" />

*Screenshots taken from the game*

This project was also a good opportunity to learn how to use inheritance in c# to represent the chess pieces.

- The Piece class is the base class representing a generic chess piece with a type and color (isWhite).
- The Tower class is a subclass of Piece representing a tower chess piece with its own Move method, which overrides the base class method.
- The Pawn class is another subclass of Piece representing a pawn chess piece with its own overridden Move method.

Here is a code sample in c#:

```csharp
using UnityEngine;

public class ChessGame : MonoBehaviour
{
    public class Piece
    {
        public string type;
        public bool isWhite;

        public Piece(string type, bool isWhite)
        {
            this.type = type;
            this.isWhite = isWhite;
        }

        public virtual void Move()
        {
            Debug.Log($"Moving {type}");
        }
    }

    public class Tower : Piece
    {
        public Tower(bool isWhite) : base("Tower", isWhite)
        {
        }

        // Override the Move method for Tower
        public override void Move()
        {
            Debug.Log($"Moving {type} in straight lines");
        }
    }

    public class Pawn : Piece
    {
        public Pawn(bool isWhite) : base("Pawn", isWhite)
        {
        }

        // Override the Move method for Pawn
        public override void Move()
        {
            Debug.Log($"Moving {type} forward (and maybe capturing diagonally)");
        }
    }

    void Start()
    {
        Tower whiteTower = new Tower(true);
        Pawn blackPawn = new Pawn(false);

        whiteTower.Move(); // Outputs: Moving Tower in straight lines
        blackPawn.Move(); // Outputs: Moving Pawn forward (and maybe capturing diagonally)
    }
}
```