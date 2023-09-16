const path = require('path');

// console.log(path)

// console.log(path.sep)
// console.log(path.resolve)

const filePath = path.join('/content/','subfolder','dummy.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'content', 'subfolder','dummy.txt')
console.log(absolute);