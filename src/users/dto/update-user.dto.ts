import { PartialType } from '@nestjs/mapped-types';
import { userSignUpDto } from './user-signup.dto';

export class UpdateUserDto extends PartialType(userSignUpDto) {}
