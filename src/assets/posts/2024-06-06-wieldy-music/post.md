Checkout out https://www.youtube.com/@WieldyHarmonica.

So some time ago I was looking for a fun new project. I really wanted to do something about music, but also recently had a friend start a Youtube channel. It made me want to do the same.

While I was learning to play the saxophone, I stumbled across sax tutorials on youtube, just like those for piano were the note fall down guitar hero style and you hit them at the right time.

However it seemed that it didn't exist for harmonica. So I set off to make this for the harmonica.

I decided I would not want to have to write all the music myself so I found midi file databases were people have already transcribed a lot of music into the midi format.

Then I spent some time pondering which tool I could use to render the videos. At first I was looking at some low level 3d libraries I could use with Python. But then realized it would be much simpler and faster for me to reach a MVP using Unity.

To generate these videos in Unity I used a nice plugin that can read and play midi files. It is fairly simple to configure and use. You just have to download some nice instrument packs called sound fonts which worked with my Unity library.

Once the midi file is loaded, I would go through it and generate my own data structure with the notes and their durations.

Then when the "game" starts, I generate GameObjects that represent the notes each time a new note needs to spawn. These game objects are configured so that they move and hit the harmonica at the right time. They disappear when they touch the harmonica using a mask.

Finally I generated the video with Unity's built in recorder tool and uploaded them to youtube under two formats. Long format and shorts.

It didn't perform that good but I kept generating new videos as I got some nice feedback from viewers.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/bP8NLv-Ey8o?si=QfO2KUnqfqI4SKoP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
