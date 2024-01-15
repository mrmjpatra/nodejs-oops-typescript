import { Application, json, urlencoded } from "express";
import * as winston from 'winston';
import * as fs from 'fs';
import * as path from 'path';
import { WriteStream } from 'fs';
import morgan from 'morgan';
import 'dotenv/config';
import Routes from "./routes";

export default class Server {
    constructor(app: Application) {
        this.config(app);
        new Routes(app)
    }
    public config(app: Application): void {
        const accessLogStream: WriteStream = fs.createWriteStream(
            path.join(__dirname, './logs/access.log'),
            { flags: 'a' }
        );
        app.set('port', process.env.PORT || 3000)
        app.use(json());
        app.use(urlencoded({ extended: true }));
        app.use(morgan('combined', { stream: accessLogStream }));
    }
}

process.on('beforeExit', function (err) {
    winston.error(JSON.stringify(err));
    console.error(err);
});