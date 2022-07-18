const {readFileSync, writeFileSync} = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')

const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
    './content/result-sync.txt',
    `This is what you see in the files: ${first}, ${second}`
    )

    console.log('done with this task')
    console.log('Starting the next one')