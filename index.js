let readline = require('readline-sync');
let add = require('./add');
let sub = require('./sub');
let mult = require('./mult');
let div = require('./div');





const calculator = () => {

    let astr = readline.question('Add meg az első számot!:');
    let bstr = readline.question('Add meg a második számot!:');
    let a = parseInt(astr);
    let b = parseInt(bstr);

    menuArray = ['+', '-', '*', '/'];
    index = (readline.keyInSelect(menuArray))+1;
    // console.log(index);

    switch (index) {
        case 1: 
            console.log(add(a, b));
            break;
        case 2: 
            console.log(sub(a, b));
            break;
        case 3:
            console.log(mnult(a, b));
            break;
        case 4:
                console.log(div(a, b));
            break;
        default: console.log('Bye!');

    }

};
calculator();