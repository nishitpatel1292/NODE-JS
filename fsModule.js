// const { readFileSync, writeFileSync } = require('fs')

// const first = readFileSync('./content/first.txt', 'utf-8')
// const second = readFileSync('./content/second.txt', 'utf-8')

// //this will add new file with specified name if it does not exist.
// //if file exists with the same name then content will be replaced
// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)

const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf-8',
    (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const first = result;
        readFile('./content/second.txt', 'utf-8',
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                const second = result
                writeFile('./content/result_async.txt', `Here is the aysnc result: ${first}, ${second}`,
                    (err, result) => {
                        if (err) {
                            console.log(err)
                            return;
                        }
                        console.log(result)
                    })
            })


    })
