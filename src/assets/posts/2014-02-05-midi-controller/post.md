Arduino is an open-source electronics platform that consists of a programmable microcontroller board designed for various DIY projects and prototyping.

To compile C code for Arduino, we use the Arduino IDE, which simplifies the process by providing a user-friendly interface. It uses the Arduino library functions for managing hardware interactions, allowing us to easily interface with pins, sensors, and peripherals. Arduino boards typically have digital and analog pins, each with specific functionalities, enabling input/output connections for components like sensors, LEDs, and motors. 

There are multiple types of Arduino boards of different sizes. The most common one is the Arduino uno.

Here is the list of pins on the Arduino:

- **D0 to D13:** Digital I/O pins for general-purpose digital input/output.
- **A0 to A5:** Analog input pins for reading analog signals from sensors or other devices.
- **TX (D1) and RX (D0):** Serial communication pins for transmitting and receiving data.
- **PWM (D3, D5, D6, D9, D10, D11):** Pulse Width Modulation pins for analog-like output.
- **Interrupt (D2, D3):** Pins capable of triggering interrupts for time-sensitive tasks.
- **5V:** Output for 5-volt power.
- **3.3V:** Output for 3.3-volt power.
- **GND:** Ground pins for connecting to the ground of external components.
- **A4 (SDA) and A5 (SCL):** Pins for I2C communication.
- **D2 (SDA) and D3 (SCL):** Alternative pins for I2C on the Uno.
- **MISO, MOSI, SCK, RESET, 5V, GND:** Pins for In-Circuit Serial Programming.

Analog pins on an Arduino can read continuous voltage levels and are typically used for analog sensors, while digital pins deal with binary signals (0 or 1), suitable for tasks like reading switches or controlling LEDs. Analog pins are labeled with 'A' (e.g., A0), and digital pins are labeled with 'D' (e.g., D2) on Arduino boards. The main distinction is in the type of signals they handle: analog for continuous values and digital for discrete values.

To make a midi controller with an Arduino board, I connected some potentiometer into analog pins. This allowed me to read the variable voltage from the potentiometers to translate to a midi value from 0 to 127. I could also have used some buttons too.

![Picture](assets/posts/2014-02-05-midi-controller/arduino.webp "Picture")

*Example circuit for a midi controller*

Then in the C code, I used the `MIDIUSB.h` library from Arduino. It will allow the board to be recognised as a MIDI controller in any DAW.

Here is a sample code for a single button midi controller.
 
```c
#include <MIDIUSB.h>

#define BUTTON_PIN 2

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(BUTTON_PIN) == LOW) {
    midiEventPacket_t noteOn = {0x09, 0x90 | 1, 60, 127};  // Note On, channel 1, note 60 (Middle C), velocity 127
    MidiUSB.sendMIDI(noteOn);
    delay(100);  // Adjust delay as needed
    midiEventPacket_t noteOff = {0x08, 0x80 | 1, 60, 127};  // Note Off, channel 1, note 60, velocity 127
    MidiUSB.sendMIDI(noteOff);
  }
}
```

Now let's make a small example for a potentiometer midi controller.

```c
#include <MIDIUSB.h>

#define POTENTIOMETER_PIN A0
#define MIDI_CC_NUMBER 1  // Change this to the desired MIDI CC number

int previousPotValue = 0;

void setup() {
  // No need to set up anything specific for the potentiometer
}

void loop() {
  int potValue = analogRead(POTENTIOMETER_PIN) / 8;  // Scale the analog input range to MIDI values (0-127)

  // Check if the potentiometer value has changed
  if (potValue != previousPotValue) {
    // Create a MIDI control change message
    midiEventPacket_t ccMessage = {0xB0, 0, MIDI_CC_NUMBER, potValue};
    
    // Send the MIDI message
    MidiUSB.sendMIDI(ccMessage);

    // Update the previous potentiometer value
    previousPotValue = potValue;
  }
}
```

The code can then be uploaded to the Arduino board with the IDE.

Check out this page for a good tutorial on [MIDIUSB](https://docs.arduino.cc/tutorials/generic/midi-device/?_gl=1*ph5kcj*_ga*MTUwNzQzMTU3MS4xNzA1Nzc5ODQw*_ga_NEXN8H46L5*MTcwNTc3OTgzOS4xLjAuMTcwNTc3OTg0MS4wLjAuMA..*_fplc*OVpuM0Q0NnNrRW8lMkJ4bjdqREFsQ01tVndlUVFRNEI4bGxOcDJxRUFKSUwlMkJyNzBEdm4wZmMwT0g4Vjd3JTJGbkc4ZHl4cE1UQWhudlBuYjF3eDI0ZHNBempVZzRkUHBQYTUyY1doWHklMkJtVE90THBwOTI1MzVJU2w1Tk9Ud2ZCYlElM0QlM0Q.).

![Picture](assets/posts/2014-02-05-midi-controller/1.webp "Picture")
![Picture](assets/posts/2014-02-05-midi-controller/2.webp "Picture")

*Pictures of the project*