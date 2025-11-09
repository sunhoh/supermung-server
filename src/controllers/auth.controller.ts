import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';

import { SignUpResponse } from '@/contracts/auth/sign-up.response';
import { SignUpApiCommand } from '@/contracts/auth/sign-up.api-command';

import { SignUpCommand } from '@/usecases/auth/sign-up.command';
import { SignUpUsecase } from '@/usecases/auth/sign-up.usecase';

export class AuthController {
    constructor(
        private readonly signUpUsecase: SignUpUsecase,
    ) {}
    async signUp(req: Request): Promise<SignUpResponse> {
        const apiCommand: SignUpApiCommand = req.body;
    
        const command: SignUpCommand = {
            id: apiCommand.id,
            email: apiCommand.email,
            name: apiCommand.name,
            phoneNumber: apiCommand.phoneNumber,
            password: apiCommand.password,
        };
    
        return await this.signUpUsecase.execute(command);
      }
}