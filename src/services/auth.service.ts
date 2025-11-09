import * as bcrypt from 'bcrypt';
import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import { TokenView } from '@/contracts/auth/token.view';
import { UserRepository } from '@/domain-models/user/user.repository';

export interface AuthPayload {
    userId: string;
}

export class AuthService {
    constructor(
      private readonly userRepository: UserRepository,
      private readonly accessSecret: string,
      // private readonly refreshSecret: string,
    ) {}
  
    generateAccessToken(payload: AuthPayload): string {
      return jwt.sign(payload, this.accessSecret, { expiresIn: '60d' });
    }
  
    // generateRefreshToken(payload: AuthPayload): string {
    //   return jwt.sign(payload, this.refreshSecret, { expiresIn: '180d' });
    // }
  
    generateTokens(payload: AuthPayload): TokenView {
      return {
        accessToken: this.generateAccessToken(payload),
        refreshToken: '',
        // refreshToken: this.generateRefreshToken(payload),
      };
    } 
}