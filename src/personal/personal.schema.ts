import { EntitySchema } from 'typeorm';
import { PersonalData } from './entities/personal.entity';

export const PersonalSchema = new EntitySchema<PersonalData>({
  name: 'PersonalData',
  target: PersonalData,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    phone: {
      type: String,
    },
    birthDate: {
      type: String,
    },
  },
});
