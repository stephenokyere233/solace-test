import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {
  LocalizedName,
  MaritalStatus,
  NationalId,
  Nationality,
  User,
} from './user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async getUser(): Promise<User> {
    return this.userService.getUser();
  }

  @Mutation(() => User)
  async updateUser(
    @Args('firstName') firstName: string,
    @Args('fatherName') fatherName: string,
    @Args('grandfatherName') grandfatherName: string,
    @Args('familyName') familyName: string,
    @Args('localizedName') localizedName: LocalizedName,
    @Args('nationalId') nationalId: NationalId,
    @Args('nationalities') nationalities: Nationality[],
    @Args('maritalStatus') maritalStatus: MaritalStatus,
    @Args('dependants', { type: () => Int }) dependants: number,
  ): Promise<User> {
    return this.userService.updateUser({
      firstName,
      fatherName,
      grandfatherName,
      familyName,
      localizedName,
      nationalId,
      nationalities,
      maritalStatus,
      dependants,
    });
  }
}
