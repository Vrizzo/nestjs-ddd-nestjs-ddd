import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCamperCommand } from './create.camper.command';

@CommandHandler()
export class CreateCamperHandler implements ICommandHandler<CreateCamperCommand> {
   execute(command: CreateCamperCommand): Promise<void> {
    throw new Error('Method not implemented.');
  }
}