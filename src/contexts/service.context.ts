import { RepositoryContext } from '@/contexts/repository.context';
import { AuthService } from '@/services/auth.service';

import { ServiceContextInterface } from './interfaces/service-context.interface';

export class ServiceContext implements ServiceContextInterface {
  readonly authService: AuthService;

  constructor(repositoryContext: RepositoryContext) {
    this.authService = new AuthService(
      repositoryContext.userRepository,
      process.env.JWT_ACCESS_SECRET || 'jwt_access_secret',
    );
  }
}

