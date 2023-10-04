import Vimeo from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
let time = 0;

player.on('timeupdate', onPlay);
function onPlay(event) {
    time = event.seconds;
    console.log(time);
}