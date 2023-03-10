import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    localStorage.setItem('videoplayer-current-time'), 1000;
});

const onPlay = function(data) {
    const array = localStorage.getItem('videoplayer-current-time')
    const currentTime = {
        duration: 61.857,
        percent: 0.049,
        seconds: 3.034,
    };
    player.setCurrentTime(currentTime);
};

player.on('play', onPlay);

