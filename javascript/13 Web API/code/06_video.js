const videoFile = document.getElementById('video');
const playV = document.getElementById('play-v');
const pauseV = document.getElementById('pause-v');
const stopV = document.getElementById('stop-v');
const seekV = document.getElementById('current-time-v');

playV.addEventListener('click', () => videoFile.play())
pauseV.addEventListener('click', () => videoFile.pause())

stopV.addEventListener('click', () => {
    videoFile.pause();
    videoFile.currentTime = 0;
})

videoFile.addEventListener('timeupdate', () => {
    seekV.innerText = videoFile.currentTime;
});
