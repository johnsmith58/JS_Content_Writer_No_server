'use strict';


var nodejs = (function(){
    const fs = require('fs');
    let json = './data/text.json'
    fs.readFile(json, (err, data) => {
        if (err) throw err;
        let student = JSON.parse(data);
    });
    console.log('test')
})
export default nodejs
// let student = { 
//     name: 'Mike',
//     age: 23, 
//     gender: 'Male',
//     department: 'English',
//     car: 'Honda' 
// };
 
// let data = JSON.stringify(student, null, 2);

// fs.writeFile(json, data, (err) => {
//     if (err) throw err;
//     console.log('Data written to file');
// });