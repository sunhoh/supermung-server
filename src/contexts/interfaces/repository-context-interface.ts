// import { AuthRepository } from '@/domain-models/auth/auth.repository';
import { UserRepository } from '@/domain-models/user/user.repository';

export interface RepositoryContextInterface {
    // authRepository: AuthRepository;
    userRepository: UserRepository;
}