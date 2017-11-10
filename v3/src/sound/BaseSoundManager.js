var Class = require('../utils/Class');
var WebAudioSoundManager = require('./WebAudioSoundManager');

//  Phaser.Loader.BaseSoundManager

var BaseSoundManager = new Class({

    // TODO define sound manager interface

});

BaseSoundManager.create = function (game)
{
    var audioConfig = game.config.audio;
    var deviceAudio = game.device.Audio;

    if ((audioConfig && audioConfig.noAudio) || (!deviceAudio.webAudio && !deviceAudio.audioData))
    {
        return new BaseSoundManager(game);
    }

    if(deviceAudio.webAudio && !(audioConfig && audioConfig.disableWebAudio))
    {
        return new WebAudioSoundManager(game);
    }

    // TODO return HTML5 Audio sound manager
    return new BaseSoundManager(game);
};

module.exports = BaseSoundManager;