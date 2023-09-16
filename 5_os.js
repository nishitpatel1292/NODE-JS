// OS Path FS HTTP

//OS
const os = require('os')

//info about current user

const user = os.userInfo()
console.log(user);

// returns the system uptime in seconds
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);

