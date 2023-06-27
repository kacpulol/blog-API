import { IsNotEmpty, IsUUID } from 'class-validator';

export class UUID {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
