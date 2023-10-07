import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localS_key = "videoplayer-current-time";
let currentTime = 0;
let startTime = localStorage.getItem(localS_key) ?? currentTime;
JSON.parse(startTime);

player.setCurrentTime(startTime);
player.on('timeupdate', throttle(onPlay, 1000));
   
function onPlay(event) {
    currentTime = event.seconds;
    JSON.stringify(currentTime);
    localStorage.setItem(localS_key, currentTime);
}