import { Prop, Schema } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../../database/identifiable-entity.schema';

@Schema({versionKey:false, collection: 'campers'})
export class CamperSchema extends IdentifiableEntitySchema {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  allergies: string[];
}