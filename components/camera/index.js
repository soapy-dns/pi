const PiCamera = require('pi-camera')

const directory = `${__dirname}/test.jpg`

const myCamera = new PiCamera({
    mode: 'photo',
    output: directory,
    width: 640,
    height: 480,
    nopreview: true,
})

myCamera.snap()
    .then((result) => {
        // Your picture was captured
        console.log(`picture captured to ${directory}`)
    })
    .catch((err) => {
        // Handle your error
        console.log('error', err)
    })