Opensound was an audio-sharing website for listening, downloading, and organizing playlists. The idea was to focus on freely reusable audio rather than commercial music.

I built the site with PHP, MySQL, and HTML. The source code was open source. That is separate from the license of an audio file, which still needs to be checked before reuse.

```sql
-- Create Opensound Database
CREATE DATABASE IF NOT EXISTS opensound;

-- Use Opensound Database
USE opensound;

-- Create Users Table
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create Audio Tracks Table
CREATE TABLE IF NOT EXISTS audio_tracks (
    track_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(100) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Sample Data for Users
INSERT INTO users (username, email, password) VALUES
    ('user1', 'user1@example.com', 'hashed_password_1'),
    ('user2', 'user2@example.com', 'hashed_password_2');

-- Sample Data for Audio Tracks
INSERT INTO audio_tracks (user_id, title, file_path) VALUES
    (1, 'Track 1', 'path/to/track1.mp3'),
    (2, 'Track 2', 'path/to/track2.mp3');
```

![Screenshot](assets/posts/2015-07-21-opensound/1.webp "Screenshot")

![Screenshot](assets/posts/2015-07-21-opensound/2.webp "Screenshot")

![Screenshot](assets/posts/2015-07-21-opensound/3.webp "Screenshot")

![Screenshot](assets/posts/2015-07-21-opensound/4.webp "Screenshot")

![Screenshot](assets/posts/2015-07-21-opensound/5.webp "Screenshot")

![Screenshot](assets/posts/2015-07-21-opensound/6.webp "Screenshot")

![Screenshot](assets/posts/2015-07-21-opensound/7.webp "Screenshot")

![Screenshot](assets/posts/2015-07-21-opensound/8.webp "Screenshot")

![Screenshot](assets/posts/2015-07-21-opensound/9.webp "Screenshot")

![Screenshot](assets/posts/2015-07-21-opensound/10.webp "Screenshot")

![Screenshot](assets/posts/2015-07-21-opensound/11.webp "Screenshot")

![Screenshot](assets/posts/2015-07-21-opensound/12.webp "Screenshot")
