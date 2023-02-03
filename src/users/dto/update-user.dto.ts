import { InputType } from '@nestjs/graphql';
import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

@InputType()
export class UpdateUserDto {
  hashedRt?: string;
  name?: string;
  email?: string;
}
