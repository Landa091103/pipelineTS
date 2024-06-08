import Server from "./providers/Server";
import {PORT,NODE_ENV} from './config';
import express from 'express';
import ClienteController from "./controllers/ClienteController";
import LibroController from "./controllers/LibrosController";

const server = new Server({
    port:PORT,
    env:NODE_ENV,
    middlewares:[
        express.json(),
        express.urlencoded({extended:true})
    ],
    controllers:[
        ClienteController.instance, LibroController.instance
    ]
    
});

server.init();