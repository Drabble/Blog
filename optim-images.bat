for /r src\assets\posts %%i in (*.jpg *.jpeg *.png *.avif) do (
   magick convert "%%i" -quality 80 -strip "%%~dpi%%~ni.webp"
   del "%%i"
)
for /r src\assets\posts %%i in (*.mp4 *.avi *.mkv) do (
   ffmpeg -i "%%i" -c:v libx264 -crf 23 -c:a aac -b:a 128k "%%~ni.mp4"
)