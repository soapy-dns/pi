/**
 * Use node exec-vid -t numOfMillisecs
 * optional --oneOff
 */
const cp = require('child_process')
const fs = require('fs')
const args = require('yargs').argv
const moment = require('moment')


const _fileExists = async () => {
    const path = `${__dirname}/vid-oneOff.h264`
    console.log('path to check', path)
    // Check if the file exists in the current directory.
    fs.access(path, fs.constants.F_OK, (err) => {
        console.log('access check', err)
        console.log(`${path} ${err ? 'does not exist' : 'exists'}`)
        if (!err) return false
        return true
    })
}

if (!args.t) return console.log('no time option (-t) set')
let fileName
if (args.oneOff) {
    fileName = `${__dirname}/vid-oneOff.h264`
    console.log('oneOff fileName', fileName)
    _fileExists(fileName).then().catch(() => (console.log('file exists')))
} else {
    fileName = `${__dirname}/vid-${moment().format('YYYYMMDDHHmmss')}.h264`
}

const command = `raspivid -o ${fileName} -t ${args.t}`
console.log('command', command)

const child = cp.exec(command, (err, child_stdout, child_stderr) => {
    if (err) return console.log('err', err, child_stderr)

    console.log('stdout', child_stdout)
})
