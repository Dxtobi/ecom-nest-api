import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { SignInDto } from './signin.dto';

export class userSignUpDto extends SignInDto {
  @IsNotEmpty({ message: 'name this is required' })
  @IsString({ message: 'Name should be a string' })
  name: string;

  @IsString({ message: 'Name should be a string' })
  location: string;
}
