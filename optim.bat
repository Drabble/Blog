for /r src\assets\posts %%i in (*.jpg *.jpeg *.png *.avif) do (
   magick convert "%%i" -quality 80 -strip "%%~dpi%%~ni.webp"
   del "%%i"
)
for /r src\assets\posts %%i in (*.mp4 *.avi *.mkv) do (
   ffmpeg -i "%%i" -c:v libx264 -crf 23 -c:a aac -b:a 128k "%%~dpi%%~ni_temp.mp4" -y
   move /y "%%~dpi%%~ni_temp.mp4" "%%i"
)
for /r src\assets\posts %%i in (thumbnail.mp4) do (
   ffmpeg -i "%%i" -c:v copy -an "%%~dpi%%~ni_temp.mp4" -y
   move /y "%%~dpi%%~ni_temp.mp4" "%%i"
)