import { Injectable } from '@nestjs/common';
import { EntitySchemaFactory } from '../../database/entity-schema.factory';
import { CamperSchema } from './camper.schema';
import { Camper } from '../camper';
import { ObjectId } from 'mongodb';

@Injectable()
export class CamperSchemaFactory
  implements EntitySchemaFactory<CamperSchema, Camper> {
  create(camper: Camper): CamperSchema {
    return {
      _id: new ObjectId(camper.id),
      name: camper.name,
      age: camper.age,
      allergies: camper.allergies,
    };
  }

  createFromSchema(entitySchema: CamperSchema): Camper {
    return new Camper(
      entitySchema._id.toHexString(),
      entitySchema.name,
      entitySchema.age,
      entitySchema.allergies,
    );
  }
}