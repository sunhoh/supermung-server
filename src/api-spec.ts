import { Tspec } from 'tspec';

import { signUpHandler } from '@/routes/auth.routes';

export type AuthApiSpec = Tspec.DefineApiSpec<{
    tags: ['auth'];
    basePath: '/api/auth';
  
    paths: {
      '/sign-up': {
        post: {
          handler: typeof signUpHandler;
        };
      };
    };
  }>;