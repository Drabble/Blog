Sono Sono is a guitar-practice application that combines audio transcription with microphone feedback. It processes songs into note sequences and tablature, then compares detected notes with the transcription while you play.

## Detecting notes

The detector runs in an AudioWorklet to keep audio processing separate from the main interface. It uses a constant-Q transform with twelve bins per octave and a spectral tilt that gives more weight to higher frequencies. This helps balance the response across guitar strings, although the result still depends on the instrument, microphone, and room.

The tuner uses YIN with parabolic interpolation to estimate the fundamental frequency. Interpolation gives a finer estimate than selecting a discrete bin. It is not a guarantee of physical tuning accuracy or background-noise rejection.

## From a song to a practice session

An automatic transcription pipeline estimates notes from audio. A solver then chooses candidate fingerings for the tablature. The detector compares what you play against that sequence and displays feedback. Transcription errors and ambiguous fingerings are still possible.

[Sono Sono - sonosono.app](https://sonosono.app)

<video controls width="300px">
  <source src="assets/posts/2026-01-01-sonosono/video.mp4" type="video/mp4">
</video>

<video controls width="300px">
  <source src="assets/posts/2026-01-01-sonosono/video2.mp4" type="video/mp4">
</video>
