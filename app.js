// Core Modules

const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

// // membuat folder secara sync
// fs.mkdirSync('./data');
// // membuat file secara sync
// fs.writeFileSync('./data/test.txt', 'haloooo aku nulis pake nodejs', 'utf-8');


// fs.writeFile('./data/testAsync.txt', 'Halooooo ini ditulis pake nodejs secara asynchronous', (e) => {
//     if (e) throw e;
//     console.log('data saved');
// });

// fs.readFile('./data/contacts.json', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

const rl = readline.createInterface({input, output});

rl.question('Haloo siapa namamu? :', (nama) => {
    rl.question('umur kamu berapa? :', (umur) => {
        const data = fs.readFileSync('./data/contacts.json', 'utf-8');
        const contacts = JSON.parse(data);
        const contact = {
            nama,
            umur
        };
        contacts.push(contact);
        // console.log(contacts);
        fs.writeFile('./data/contacts.json', JSON.stringify(contacts), (e) => {
            if (e) throw e;
            console.log(contacts + 'saved');
        });
        rl.close();
    });
});