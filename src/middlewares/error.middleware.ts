import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodError } from 'zod';


export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    _: NextFunction,
  ) => {
    console.error(
      `🚨 ${new Date().toISOString()} ${req.method} ${req.url} 에러 발생`,
    );

    console.error(`- 요청 헤더: ${JSON.stringify(req.headers)}`);
    console.error(`- 요청 바디: ${JSON.stringify(req.body)}`);
    console.error(`- 요청 파라미터: ${JSON.stringify(req.params)}`);
    console.error(`- 요청 쿼리: ${JSON.stringify(req.query)}`);
    console.error(err);
}
