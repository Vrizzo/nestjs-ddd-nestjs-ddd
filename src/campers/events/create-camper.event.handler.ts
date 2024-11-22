import { ObjectId } from 'mongodb';
import { CreateCamperEvent } from './create-camper.event';
import { IEventHandler } from '@nestjs/cqrs';
import { Camper } from '../camper';
import { CamperEntityRepository } from '../db/camper.entity.repository';

export class CreateCamperEventHandler implements IEventHandler<CreateCamperEvent> {
  constructor(private readonly camperRepository: CamperEntityRepository) {}

  async handle(event: CreateCamperEvent) {
    const { name, age, allergies } = event;
    const camper = new Camper(new ObjectId().toHexString(), name, age, allergies);
    await this.camperRepository.create(camper);
  }
}