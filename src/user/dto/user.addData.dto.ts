import { IsDate, IsDateString, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UserAddDataValidator {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(30)
    @IsOptional()
    firstName: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(30)
    @IsOptional()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(50)
    @IsOptional()
    phone: string;

    @IsString()
    @IsNotEmpty()
    @IsDateString()
    @IsOptional()
    birthDate: string;// yyyy-mm-dd 2019-09-07
  }
  