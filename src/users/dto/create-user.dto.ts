import { IsString, IsInt, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsInt()
  age: number;
}
