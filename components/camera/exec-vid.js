/**
 * Use node exec-vid -t numOfMillisecs
 */
const cp = require('child_process')
const fs = require('fs')
const args = require('yargs').argv
const moment = require('moment')

if (!args.t) return console.log('no time option (-t) set')
let fileName
if (args.oneOff) {
    fileName = `${__dirname}/${vid-oneOff.h264}`
} else {
    fileName = `${__dirname}/vid-${moment().format('YYYYMMDDHHmmss')}.h264`
}

const command = `raspivid -o ${fileName} -t ${args.t}`
console.log('command', command)

// const child = cp.exec(command, (err, child_stdout, child_stderr) => {
//     if (err) return console.log('err', err, child_stderr)

//     console.log('stdout', child_stdout)
// })
