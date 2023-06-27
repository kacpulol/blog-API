import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class EditBlogValidator {
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 1200)
  contents: string;

  @IsNotEmpty()
  @IsUUID()
  id: string;
}
