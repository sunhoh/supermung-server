import { RepositoryContextInterface } from '@/contexts/interfaces/repository-context-interface';
import { ServiceContextInterface } from '@/contexts/interfaces/service-context.interface';
import { UsecaseContextInterface } from '@/contexts/interfaces/usecase-context-interface';
import { SignUpUsecase } from '@/usecases/auth/sign-up.usecase';


export class UsecaseContext implements UsecaseContextInterface {
  // auth
  readonly signUpUsecase: SignUpUsecase;

  constructor(
    private readonly repositoryContext: RepositoryContextInterface,
    private readonly serviceContext: ServiceContextInterface,
  ) {
    // auth
    this.signUpUsecase = new SignUpUsecase(
    // this.repositoryContext.authRepository,
      this.repositoryContext.userRepository,
      this.serviceContext.authService,
    );
  }
}
