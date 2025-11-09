import { RequestHandler, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';

import { AppContext } from '@/contexts/app.context';
import { SignUpResponse } from '@/contracts/auth/sign-up.response';
import { SignUpApiCommand } from '@/contracts/auth/sign-up.api-command';
import { validateRequest } from '@/middlewares/validate.middleware';

const router = Router();

const appContext = AppContext.getInstance();
const { authController } = appContext.controllerContext;

const signUpSchema = z.object({
    id: z.string(),
    email: z.string(),
    name: z.string(),
    phoneNumber: z.string(),
    password: z.string(),
  });

export const signUpHandler: RequestHandler<
{},
SignUpResponse,
SignUpApiCommand
> = async (req, res) => {
const response = await authController.signUp(req);
res.json(response);
};

router.post('/sign-up', validateRequest(signUpSchema), signUpHandler);


export default router;