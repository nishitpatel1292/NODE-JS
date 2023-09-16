const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

//this will add new file with specified name if it does not exist.
//if file exists with the same name then content will be replaced
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)

