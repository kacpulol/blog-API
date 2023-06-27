import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalSchema } from './personal.schema';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalSchema])],
  providers: [PersonalService],
  exports: [PersonalService, TypeOrmModule],
})
export class PersonalModule {}
