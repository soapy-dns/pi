/**
 * Use node exec-vid -t numOfMillisecs
 */
const cp = require('child_process')
const fs = require('fs')
const args = require('yargs').argv
const moment = require('moment')

const fileName = 'vid-'.concat(moment().format('YYYYMMDDHHmmss')).concat('.h264')

const command = `raspivid -o ${fileName} -t ${args.t}`

const child = cp.exec(command, (err, child_stdout, child_stderr) => {
    if (err) return console.log('err', err, child_stderr)

    console.log('stdout', child_stdout)
})
