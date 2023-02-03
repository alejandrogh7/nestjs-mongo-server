import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostDto {
  @Field(() => String)
  text: string;

  @Field(() => String)
  sender: string;
}
