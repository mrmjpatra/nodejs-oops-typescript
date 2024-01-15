import { Request, Response, NextFunction } from 'express';
import * as winston from 'winston';

const file = new winston.transports.File({
  filename: '../logs/error.log',
  level: 'error',
  handleExceptions: true,
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
) => {
    const simplifiedReq = {
        method: req.method,
        url: req.url,
        headers: req.headers,
        // add any other properties you're interested in
    };

    const error: object = { Message: message, Request: simplifiedReq, Stack: err };
    winston.error(JSON.stringify(error));
    res.json({ Message: message });
}