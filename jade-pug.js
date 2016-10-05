/**
 * Created by jevons on 6/10/2016.
 */
const pug = require('pug');

// compile the source code
const compiled = pug.compileFile('email-template/template1.pug');

// render a set of data
console.log(compiled({
    name: 'Jevons'
}));