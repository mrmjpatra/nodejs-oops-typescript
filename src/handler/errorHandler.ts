import { Request, Response, NextFunction } from 'express';
import * as winston from 'winston';
import path from 'path'
import { ERROR_CODE } from '../common/error-code';
const logFilePath = path.join(__dirname, '../logs/error.log');

const file = new winston.transports.File({
  filename: logFilePath,
  level: 'error',
  handleExceptions: true,
});
winston.configure({
    transports: [file],
});

export const unCaughtErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    winston.error(JSON.stringify(err));
    res.end({ error: err });
}

export const apiErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    message: string,
    errorCode:{
        code:number,
        message:string
    }=ERROR_CODE.INTERNAL_SERVER_ERROR
) => {
    console.log("Insider handler")
    const simplifiedReq = {
        method: req.method,
        url: req.url,
        headers: req.headers,
    };

    const error: object = { Message: message, Request: simplifiedReq, Stack: err,ErrorCode:errorCode };
    winston.error(JSON.stringify(error));
    res.status(errorCode.code).json({ error: err.message });
}