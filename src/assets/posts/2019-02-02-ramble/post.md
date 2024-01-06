# Ramble

Ramble is a project I worked on alone for my master's degree at the university. My goal was to fully create, from music to 3D models and programming, a Multiplayer Online game based on League of Legends and DOTA but with a different twist. The goal of the game is to work with your team to push a cart on the other side of the map by capturing strategic outposts.

## Beginnings

The game started as a 2.5D multiplayer fighting game. I quickly realized that with my knowledge of 3D animations and VFX, it was going to be difficult to make a very dynamic and responsive game. I also tried using ML agents to train an AI to play using deep reinforcement learning. Unfortunately, I didn't have enough time to improve it much.

![Game](assets/posts/2019-02-02-ramble/1.webp)
![Game](assets/posts/2019-02-02-ramble/2.webp)
![Game](assets/posts/2019-02-02-ramble/3.webp)
![Game](assets/posts/2019-02-02-ramble/4.webp)
![Game](assets/posts/2019-02-02-ramble/5.webp)
![Game](assets/posts/2019-02-02-ramble/6.webp)

*Screenshots taken from the first prototype*

Here are some more samples from the first prototype.

<video autoplay loop muted>
  <source src="assets/posts/2019-02-02-ramble/1.mp4" type="video/mp4">
</video>

*Video taken from the first prototype*

## The Real Game

I decided to move away from the 2.5D game and make something a bit more complex that required team strategy. Let's start with the trailer.

<video autoplay loop muted>
  <source src="assets/posts/2019-02-02-ramble/trailer.mp4" type="video/mp4">
</video>

*The trailer*

## Menu & Networking

I did a lot of iterations on the menu and the matchmaking. It is difficult without being a designer to come up with something that looks good. For the networking part, I used the Proton library, which allowed me to run a server in the cloud easily to synchronize my players and set up matchmaking.

![Game](assets/posts/2019-02-02-ramble/113.webp)
![Game](assets/posts/2019-02-02-ramble/116.webp)
![Game](assets/posts/2019-02-02-ramble/120.webp)
![Game](assets/posts/2019-02-02-ramble/98.webp)
![Game](assets/posts/2019-02-02-ramble/103.webp)

*Menus from the game*

## The Map

I also did many iterations on the map. I think in the end I did many iterations on everything. The map design needed to be big enough to fit a lot of things but also not too big so players can find each other. It also needed to be shown on a minimap and be symmetrical on both team sides.

![Game](assets/posts/2019-02-02-ramble/7.webp)
![Game](assets/posts/2019-02-02-ramble/10.webp)
![Game](assets/posts/2019-02-02-ramble/11.webp)
![Game](assets/posts/2019-02-02-ramble/12.webp)
![Game](assets/posts/2019-02-02-ramble/15.webp)
![Game](assets/posts/2019-02-02-ramble/16.webp)
![Game](assets/posts/2019-02-02-ramble/17.webp)

*Screenshots taken from the game*

## The Champions

I created far too many champions. In the end, I only kept a few. Each champion needed VFX and animations for 6 spells + items. Here are some of the champions you could play in the game.

![Game](assets/posts/2019-02-02-ramble/18.webp)
![Game](assets/posts/2019-02-02-ramble/43.webp)
![Game](assets/posts/2019-02-02-ramble/47.webp)
![Game](assets/posts/2019-02-02-ramble/51.webp)
![Game](assets/posts/2019-02-02-ramble/65.webp)
![Game](assets/posts/2019-02-02-ramble/73.webp)
![Game](assets/posts/2019-02-02-ramble/77.webp)
![Game](assets/posts/2019-02-02-ramble/90.webp)
![Game](assets/posts/2019-02-02-ramble/92.webp)

*Screenshots taken from the game*

## Extras

In the end, I had to implement so many other things in the game.

- Win/Lose
- Hide in bushes
- Fog of war
- Mini-map
- See-through shaders (and many other shaders)
- AI for monsters
- Networking
- The shop for items and gold
- Chat
- Status bar
- etc.

![Game](assets/posts/2019-02-02-ramble/19.webp)
![Game](assets/posts/2019-02-02-ramble/98.webp)
![Game](assets/posts/2019-02-02-ramble/100.webp)
![Game](assets/posts/2019-02-02-ramble/129.webp)
![Game](assets/posts/2019-02-02-ramble/130.webp)
![Game](assets/posts/2019-02-02-ramble/132.webp)
![Game](assets/posts/2019-02-02-ramble/134.webp)
![Game](assets/posts/2019-02-02-ramble/136.webp)

*Screenshots taken from the game*