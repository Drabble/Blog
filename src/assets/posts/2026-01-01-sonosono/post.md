# [Sono Sono - sonosono.app](https://sonosono.app)

Sono Sono is not just a rhythm game; it's a high-performance tool designed to help musicians master the guitar. By combining state-of-the-art Automatic Music Transcription (AMT) with real-time digital signal processing (DSP), it provides an unparalleled practice experience.

### The Technical "Brain"

At its core, Sono Sono uses advanced algorithms implemented in **AudioWorklets** to ensure the lowest possible latency for real-time feedback.

#### 1. CQT (Constant-Q Transform)
Unlike standard FFT (Fast Fourier Transform), which uses equal frequency spacing, **CQT** maps frequencies directly to musical semitones. This allows the playback engine to monitor specific "bins" for each note on the guitar fretboard with high precision.
- **Selectivity**: Custom windowed complex exponentials with a selectivity `Q` tailored for 12 bins per octave.
- **Spectral Tilt**: The engine applies a spectral tilt to boost higher frequencies, ensuring that the interface can hear the thin high E and B strings just as clearly as the resonant low strings.

#### 2. YIN Algorithm & Parabolic Interpolation
The built-in guitar tuner uses the **YIN algorithm**, specialized for finding fundamental frequencies. 
- **Sub-bin Accuracy**: By applying **Parabolic Interpolation** to the YIN difference function, the tuner calculates pitch down to a fraction of a cent, making it extremely sensitive and professional-grade.
- **Noise Rejection**: Uses cumulative mean normalized difference to isolate the guitar's signal from background noise.

### The Workflow

1.  **AMT Pipeline**: Songs are processed through an Automatic Music Transcription pipeline that uses AI models to extract accurate MIDI and tablature from audio.
2.  **Finger Optimization**: Automated solvers generate the most efficient fingerings for each sequence.
3.  **Real-time Reality**: As you play, the **NoteDetector** compares your performance against the transcription in real-time, providing instant visual feedback.

<video controls width="300px">
  <source src="assets/posts/2026-01-01-sonosono/video.mp4" type="video/mp4">
</video>

<video controls width="300px">
  <source src="assets/posts/2026-01-01-sonosono/video2.mp4" type="video/mp4">
</video>
