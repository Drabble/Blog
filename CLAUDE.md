# Blog Project Guide

This repository is an Angular 17 project that serves as a personal blog. Posts are static and loaded dynamically from the `assets` folder.

## Creating a new Post

To create a new post, follow these steps:

1.  **Generate a Unique ID**: Use the format `YYYY-MM-DD-slug` (e.g., `2024-04-19-my-new-post`).
2.  **Create Folder**: Create a new directory in `src/assets/posts/` named with your Unique ID.
3.  **Add Metadata (`index.json`)**: Create an `index.json` file in the new folder with the following structure:
    ```json
    {
      "thumbnail": "thumbnail.mp4",
      "title": "Post Title",
      "description": "Short description of the post.",
      "date": "Month Day, Year",
      "tag": "music"
    }
    ```
    *   **Thumbnail**: Should be a short (5-10s), sped-up (e.g. 2x), muted `.mp4` file. This is used for the card preview.
    *   **Full Video**: Store the high-quality version as `video.mp4` in the same folder and embed it in `post.md`.
4.  **Add Content (`post.md`)**: Create a `post.md` file in the same folder. This file contains the main content of the post in Markdown format. To embed the full video, use:
    ```html
    <video controls width="100%">
      <source src="assets/posts/YYYY-MM-DD-slug/video.mp4" type="video/mp4">
    </video>
    ```
5.  **Register Post**: Add your Unique ID String to the beginning of the array in `src/assets/posts.json`.

## Video Processing (FFmpeg)
To generate the thumbnail from a full video:
```bash
ffmpeg -i video.mp4 -vf "setpts=0.5*PTS,scale=240:240:force_original_aspect_ratio=increase,crop=240:240" -t 8 -an thumbnail.mp4
```
- `setpts=0.5*PTS`: 2x speed.
- `scale=240:240...`: Scaled and cropped to square for the card.
- `-t 8`: Limit to 8 seconds.
- `-an`: Remove audio.

## Common Tags
- `game`
- `software`
- `website`
- `machine learning`
- `blockchain`
- `diy`
- `music`

## Development
- Run `npm start` (or `ng serve`) to start the development server.
- Build the project with `npm run build`.
