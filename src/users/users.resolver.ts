import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User, { name: 'createUser' })
  public create(@Args('payload') payload: CreateUserDto): Promise<User> {
    return this.usersService.create(payload);
  }

  @Query(() => [User], { name: 'users' })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findByID(
    @Args('id', { type: () => String }) id: string,
  ): Promise<User | undefined> {
    return this.usersService.getByID(id);
  }

  @Mutation(() => Boolean)
  update(
    @Args('id', { type: () => String }) id: string,
    @Args('payload') payload: UpdateUserDto,
  ): Promise<boolean> {
    return this.usersService.update(id, payload);
  }
}
