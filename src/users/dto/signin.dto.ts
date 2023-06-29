import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SignInDto {
  @IsNotEmpty({ message: 'email this is required' })
  @IsEmail({}, { message: 'please provide a valid email' })
  email: string;

  @IsNotEmpty({ message: 'password is required' })
  @MinLength(5, { message: 'minimum character should be 5 for password' })
  password: string;
}
