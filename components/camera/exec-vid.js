/**
 * Use node exec-vid -t numOfMillisecs
 * optional --oneOff
 */
const cp = require('child_process')
const fs = require('fs')
const arguements = require('yargs').argv
const moment = require('moment')
const util = require('util')


const _fileExists = () => {
    return new Promise((resolve) => {
        const path = `${__dirname}/vid-oneOff.h264`
        console.log('path to check', path)
        fs.access(path, fs.constants.F_OK, (err) => {
            console.log('access check', err)
            console.log(`${path} ${err ? 'does not exist' : 'exists'}`)
            if (!err) resolve(true)

            console.log('file does not exist')
            resolve(false)
        })
    })
}

const _takeVideo = (fileName, time) => {
    const command = `raspivid -o ${fileName} -t ${time}`
    console.log('command', command)

    const child = cp.exec(command, (err, child_stdout, child_stderr) => {
        if (err) return console.log('err', err, child_stderr)

        console.log('stdout', child_stdout)
    })
}

const _doIt = async (args) => {
    if (!args.t) return console.log('no time option (-t) set')
    let fileName
    if (args.oneOff) {
        fileName = `${__dirname}/vid-oneOff.h264`
        console.log('oneOff', )
        const exists = await _fileExists(fileName)
        console.log('exists', exists)
        if (!exists) {
            _takeVideo(fileName, args.t)
        } else {
            console.log('file already exists')
        }
    } else {
        fileName = `${__dirname}/vid-${moment().format('YYYYMMDDHHmmss')}.h264`
        _takeVideo(fileName, args.t)
    }
}

_doIt(arguements)
