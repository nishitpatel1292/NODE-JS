//CommanJS, every file is module (by defualt)
// Modules - Encapsulated Code (only share minimu m)

 
const person = {
    name:'bob',
}
const sayHi = (arg1,arg2) => {
    console.log(arg1,arg2);
    return 'done'
}

// module.exports = sayHI
// module.exports.singlePerson = person

//correct way

module.exports = {
    sayHi,
    singlePerson : person,
}