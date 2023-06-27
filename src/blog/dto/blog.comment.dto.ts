import { IsNotEmpty, IsOptional, IsString, IsUUID, Length } from "class-validator";

export class CommentValidator {
    @IsOptional()
    @IsUUID()
    id?: string;

    @IsOptional()
    @IsUUID()
    post?: string;

    @IsString()
    @IsNotEmpty()
    @Length(6, 500)
    contents: string;
  }
  