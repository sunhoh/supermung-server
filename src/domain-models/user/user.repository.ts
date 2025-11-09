import { User } from './user.entity';

export interface CreateUserParams {
    id: string;
    email: string;
    name: string;
    phoneNumber: string;
    password: string;
  }

export interface UserRepository {
    createUser(params: CreateUserParams): Promise<User>;
}