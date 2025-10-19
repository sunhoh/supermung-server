import { NextFunction, Request, Response } from 'express';
import { ZodType } from 'zod';

export const validateRequest = (schema: ZodType, property: 'body' | 'query' | 'params') => {
    return (req: Request, _: Response, next: NextFunction) => {
        schema.parse(req[property]);
        next();
      };
};