import Player from '@vimeo/player';
import throttle from "lodash.throttle"

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const GET_TIME_KEY = "videoplayer-current-time";

player.on("timeupdate", throttle(currentVideoTime, 1000));
saveVideoTime();


function currentVideoTime (event){
    localStorage.setItem(GET_TIME_KEY, event.seconds)
};

function saveVideoTime(){
let saveTime = localStorage.getItem(GET_TIME_KEY)

    if(saveTime){
        player.setCurrentTime(saveTime)  ;        
    };    
};
