#!/usr/bin/node

//refactor with express
import express from 'express';
import path from 'node:path';

const app = express();
const __dirname = import.meta.dirname;
const options = {
        root: __dirname,
    }



app.get('/', (req, res) => {
    res.sendFile('index.html', options);
})

app.get('/about', (req, res) => {
    res.sendFile('about.html', options);
})

app.get('/contact-me', (req, res) => {
    res.sendFile('contact-me.html', options);
})

app.use((req, res) => {
    res.status(400).sendFile('404.html', options);
    console.log('error 404');
    
})



const PORT = 8000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`listening on port${PORT}`);
});


// import http from 'node:http';
// import fs from 'fs';

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     const url = req.url;
//     switch (url) {
//         case '/':
//             fs.readFile('index.html', (err, data) => {
//                 if (err) {
//                     res.writeHead(404)
//                 }
//                 else {
//                     res.write(data)
//                 }
//                 res.end();
//             })
//             break;
        
//         case '/about':
//             fs.readFile('about.html', (err, data) => {
//                 if (err) {
//                     res.writeHead(404)
//                 }
//                 else {
//                     res.write(data)
//                 }
//                 res.end();
//             })
//             break;
        
//         case '/contact-me':
//             fs.readFile('contact-me.html', (err, data) => {
//                 if (err) {
//                     res.writeHead(404)
//                 }
//                 else {
//                     res.write(data)
//                 }
//                 res.end();
//             })
//             break;

//         default:
//             fs.readFile('404.html', (err, data) => {
//                 if (err) {
//                     res.writeHead(404)
//                 }
//                 else {
//                     res.write(data)
//                 }
//                 res.end();
//             })
//     }
// })

// server.listen(8000);


