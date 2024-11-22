import { Module } from '@nestjs/common';
import { CampersController } from './campers/campers.controller';
import { CamperModule } from './campers/camper.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CamperModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
