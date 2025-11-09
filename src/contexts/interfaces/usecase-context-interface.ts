import { SignUpUsecase } from '@/usecases/auth/sign-up.usecase';

export interface UsecaseContextInterface {
  // auth
  signUpUsecase: SignUpUsecase;
}
