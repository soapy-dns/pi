const PiCamera = require('pi-camera');
const myCamera = new PiCamera({
    mode: 'video',
    output: `${ __dirname }/video.h264`,
    width: 1920,
    height: 1080,
    timeout: 5000, // Record for 5 seconds
    nopreview: true,
    verbose: true
});

myCamera.record()
    .then((result) => {
        // Your video was captured
        console.log(`captured ${ __dirname }/video.h264`)
    })
    .catch((error) => {
        console.log('error', error)
    });

// raspivid --width 1920 --height 1080 -o vid.h264