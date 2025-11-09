import { User } from '@/domain-models/user/user.entity';
import { CreateUserParams, UserRepository } from '@/domain-models/user/user.repository';

import { PrismaClientType } from './prisma';

export class PrismaUserRepository implements UserRepository {
    constructor(
        private readonly prisma: PrismaClientType,
      ) {}

    async createUser(params: CreateUserParams): Promise<User> {
        const user = await this.prisma.users.create({
          data: {
            email: params.email,
            name: params.name,
            phoneNumber: params.phoneNumber,
            password: params.password,
          },
        });
        return new User(user);
      }
}