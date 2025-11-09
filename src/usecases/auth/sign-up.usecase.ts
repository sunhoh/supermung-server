import { StatusCodes } from 'http-status-codes';

import { UserRepository } from '@/domain-models/user/user.repository';
import { AuthService } from '@/services/auth.service';
import { SignUpCommand } from './sign-up.command';

export class SignUpUsecase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authService: AuthService,
  ) {}

  async execute(command: SignUpCommand): Promise<{
    token: {
      accessToken: string;
      refreshToken: string;
    };
  }> {

    const user = await this.userRepository.createUser({
      id: command.id,
      email: command.email,
      name: command.name,
      phoneNumber: command.phoneNumber,
      password: command.password,
    });

    const token = await this.authService.generateTokens({
      userId: user.id,
    });

    return { token };
  }
}
