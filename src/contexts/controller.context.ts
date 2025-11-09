import { ControllerContextInterface } from '@/contexts/interfaces/controller-context-interface';
import { ServiceContextInterface } from '@/contexts/interfaces/service-context.interface';
import { UsecaseContextInterface } from '@/contexts/interfaces/usecase-context-interface';

import { AuthController } from '@/controllers/auth.controller';

export class ControllerContext implements ControllerContextInterface {
    readonly authController: AuthController;
    

    constructor(
        usecaseContext: UsecaseContextInterface,
        serviceContext: ServiceContextInterface,
    ) {
        this.authController = new AuthController(
            usecaseContext.signUpUsecase,
        );
    }
}