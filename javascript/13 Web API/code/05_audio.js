const audioFile = document.getElementById('audio-file');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const seek = document.getElementById('current-time');
const sound = document.getElementById('volume');

play.addEventListener('click', () => audioFile.play());
pause.addEventListener('click', () => audioFile.pause());

stop.addEventListener('click', () =>{
    audioFile.pause()
    audioFile.currentTime = 0
});

audioFile.addEventListener('timeupdate', () => {
    seek.innerText = audioFile.currentTime;
});

sound.addEventListener('change', () => {
    audioFile.volume = sound.value;
})