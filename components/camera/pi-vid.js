
const cp = require('child_process')
const fs = require('fs')
const args = require('yargs').argv

const child = cp.spawn('ls', [ '-l' ])
const fileName = 'ls-result2.txt'


// child.stdout.on('data', function (data) {
//     console.log('stdout: ' + data);
//     })
child.stdout.pipe(fs.createWriteStream(fileName))
child.on('exit', function (code, signal) {
    console.log('exit')
})