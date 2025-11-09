
import { ControllerContextInterface } from '@/contexts/interfaces/controller-context-interface';
import { RepositoryContextInterface } from '@/contexts/interfaces/repository-context-interface';
import { UsecaseContextInterface } from '@/contexts/interfaces/usecase-context-interface';
import { ServiceContextInterface } from '@/contexts/interfaces/service-context.interface';
import { ControllerContext } from '@/contexts/controller.context';
import { RepositoryContext } from '@/contexts/repository.context';
import { ServiceContext } from '@/contexts/service.context';
import { UsecaseContext } from '@/contexts/usecase.context';

import prisma from "@/data-access/prisma";

export class AppContext {
    private static instance: AppContext;
    public readonly repositoryContext: RepositoryContextInterface;
    public readonly usecaseContext: UsecaseContextInterface;
    public readonly controllerContext: ControllerContextInterface;
    public readonly serviceContext: ServiceContextInterface;

    private  constructor(){
        this.repositoryContext = new RepositoryContext(prisma);
        
        this.serviceContext = new ServiceContext(this.repositoryContext);

        this.usecaseContext = new UsecaseContext(
            this.repositoryContext,
            this.serviceContext,
          );

        this.controllerContext = new ControllerContext(
            this.usecaseContext,
            this.serviceContext,
          );
    }

    public static getInstance(): AppContext {
        if (!AppContext.instance) {
          AppContext.instance = new AppContext();
        }
        return AppContext.instance;
    }
}
