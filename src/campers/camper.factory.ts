import { EntityFactory } from '../database/entity.factory';
import { Camper } from './camper';
import { ObjectId } from 'mongodb';
import { CreateCamperEvent } from './events/create-camper.event';
import { CamperEntityRepository } from './db/camper.entity.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CamperFactory implements EntityFactory<Camper> {
  constructor(private readonly camperRepository: CamperEntityRepository) {}

  async create(name: string, age: number,allergies: string[]): Promise<Camper> {
    const camper = new Camper(
      new ObjectId().toHexString(),
      name,
      age,
      allergies,
    );
    await this.camperRepository.create(camper);
    camper.apply(new CreateCamperEvent(name, age, allergies));
    return camper;
  }
}
