I started exploring game development by creating a Tic Tac Toe game using Java and the NetBeans IDE. 

It was a quick side project I worked on during a 3-day Java programming course. Despite the time constraints, I managed to fit in this fun project, making my first steps into the world of game development all the while following the Java course.

As someone new to programming, I harnessed the user-friendly features of NetBeans to fashion a user interface (UI) with Swing. As you can see below the interface is really futuristic.

![Netbeans UI](assets/posts/2011-02-01-tic-tac-toe/netbeans-ui.webp "Netbeans UI")
*Netbeans UI to make Swing GUIs*

It was a nice way for me to learn making a GUI. Easier than writing raw swing code like you can see below.

```java
import javax.swing.*;  

public class FirstSwingExample {  
    public static void main(String[] args) {  
        JFrame f=new JFrame();
                
        JButton b=new JButton("click"); 
        b.setBounds(130,100,100, 40); 
                
        f.add(b);
                
        f.setSize(400,500);
        f.setLayout(null);
        f.setVisible(true);
    }  
}  
```

Although the aesthetics were far from glamorous, the game worked and we enjoyed a few games with my colleague from the class.

<video autoplay loop muted>
  <source src="assets/posts/2011-02-01-tic-tac-toe/demo.mp4" type="video/mp4">
</video>

