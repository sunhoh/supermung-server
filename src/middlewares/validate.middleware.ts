import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

export const validateRequest = (
  schema: ZodSchema,
  property: 'query' | 'body' | 'params' = 'body',
) => {
  return (req: Request, _: Response, next: NextFunction) => {
    schema.parse(req[property]);
    next();
  };
};
