#!/usr/bin/node

import http from 'node:http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const url = req.url;
    switch (url) {
        case '/':
            fs.readFile('index.html', (err, data) => {
                if (err) {
                    res.writeHead(404)
                }
                else {
                    res.write(data)
                }
                res.end();
            })
            break;
        
        case '/about':
            fs.readFile('about.html', (err, data) => {
                if (err) {
                    res.writeHead(404)
                }
                else {
                    res.write(data)
                }
                res.end();
            })
            break;
        
        case '/contact-me':
            fs.readFile('contact-me.html', (err, data) => {
                if (err) {
                    res.writeHead(404)
                }
                else {
                    res.write(data)
                }
                res.end();
            })
            break;

        default:
            fs.readFile('404.html', (err, data) => {
                if (err) {
                    res.writeHead(404)
                }
                else {
                    res.write(data)
                }
                res.end();
            })
    }
})

server.listen(8000);


