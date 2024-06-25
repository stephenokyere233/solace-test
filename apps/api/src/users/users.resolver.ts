import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { EditUserInput } from './models/user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User, { name: 'user' })
  getUser(@Args('id', { type: () => Int }) id: number): User {
    return this.usersService.getUserById(id);
  }

  @Mutation(() => User)
  editUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('userData') userData: EditUserInput,
  ): User {
    return this.usersService.editUser(id, userData);
  }
}
