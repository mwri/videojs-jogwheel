let videojs = require('video.js');
let video_jogwheel = require('video-jogwheel').default;

const plugin = videojs.getPlugin('plugin');


class videojs_jogwheel extends plugin {

    constructor (player, options) {

        super(player, options);

        if (options === undefined)
            options = {};

        this._options = options;

        let video = player.$$('video')[0];
        this._video_jogwheel = new video_jogwheel(video);

    }

}

videojs_jogwheel.VERSION = '1.0.0';


videojs.registerPlugin('jogWheel', videojs_jogwheel);
