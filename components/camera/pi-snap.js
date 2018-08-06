
const cp = require('child_process')
var fs = require('fs')

const command = 'ls'
const params = ['-l']

// raspivid -o video5.h264 -t 300000

const child = cp.exec(command, (err, stdout, stderr) => {
    
}
const fileName = 'ls-result3.txt'


// child.stdout.on('data', function (data) {
//     console.log('stdout: ' + data);
//     })
// child.stdout.pipe(fs.createWriteStream(fileName))
child.on('exit', function (code, signal) {
    console.log('exit', code, signal)
})