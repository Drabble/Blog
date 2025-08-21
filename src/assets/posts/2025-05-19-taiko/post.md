Some time ago, I was thinking about how electric drums worked. I wondered what kind of sensor was used to measure hits and velocity.
I found out that they were using piezo sensors and decided I would try to make one. Continuing my research, I found out about people
making Taiko drum USB controllers. A taiko is a big japanese drum but there also exist an arcade game where you hit a Taiko to play a ryhtm game.

I then followed information that I found on this instructable page https://www.instructables.com/Taiko-Rythm-Game-Open-Controller/

Here is the code I used with some tweaks to the parameters: https://github.com/LuiCat/ArduinoTaikoController

Here is the final build:

<img src="assets/posts/2025-05-19-taiko/2.webp" alt="Taiko" title="Taiko" />
<img src="assets/posts/2025-05-19-taiko/3.webp" alt="Taiko" title="Taiko" />

The Arduino I used here is a chinese knockoff of an Arduino micro with has an atmega32u4 chip on it. 
In the Arduino UNO, the USB controller is on a separate chip that only supports serial communication.
However, the atmega32u4 integrates the USB controller on the chip which means that we can override the code handling
the USB communication.

A very simple library exists to do that with Arduino, it's called MIDIUSB https://docs.arduino.cc/libraries/midiusb/.
The midiusb library makes the arduino pretend to be a usb device that speaks the usb-midi class protocol.
the pc sees it as a “midi controller” because usb has a standard device class for midi. It doesn't require any additional driver.

Here's a quick demo:

<video autoplay loop muted>
  <source src="assets/posts/2025-05-19-taiko/1.mp4" type="video/mp4">
</video>
