import { Application } from "express";
import express from 'express';
import Server from "./src";


const app: Application = express();
const server: Server = new Server(app);

app.listen(app.get('port'), () => {
    console.info(`Server on port ${app.get('port')}`);
}).on('error', (err) => {
    console.error(err);
})


