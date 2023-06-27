import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class AddBlogValidator {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(50)
    title: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(1200)
    contents: string;
  }
  