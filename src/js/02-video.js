import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGETIME_KEY = 'videoplayer-current-time';

const timeUpdate = function (time) {
  const { seconds } = time;

  localStorage.setItem(STORAGETIME_KEY, seconds);
};

player.on('timeupdate', throttle(timeUpdate, 1000));

player.setCurrentTime(localStorage.getItem(STORAGETIME_KEY));
