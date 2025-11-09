import { RepositoryContextInterface } from '@/contexts/interfaces/repository-context-interface';

import { PrismaClientType } from '@/data-access/prisma';

import { UserRepository } from '@/domain-models/user/user.repository';
import { PrismaUserRepository } from '@/data-access/prisma-user.repository';

export class RepositoryContext implements RepositoryContextInterface {
    readonly userRepository: UserRepository;

    constructor(prisma: PrismaClientType) {
        this.userRepository = new PrismaUserRepository(prisma);
    }
}