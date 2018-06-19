
const PiCamera = require('pi-camera')

const _record = async (camera) => {
        await camera.record()
    // return Promise.resolve()
}

setTimeout(function(){
    const seconds = 5 * 1000
    // const minutes = 1 * 60 * 1000
    console.log('__dirname', __dirname)
    const myCamera = new PiCamera({
        mode: 'video',
        output: `${ __dirname }/video.h264`,
        width: 1920,
        height: 1080,
        timeout: seconds, // Record for 5 seconds
        nopreview: true,
    })

    _record(myCamera).then(() => {
        console.log('video captured')
    }).catch(err =>  console.log('error capturing video', err)
    )
}, 10000)