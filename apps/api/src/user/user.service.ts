import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private user: User = {
    firstName: 'John',
    fatherName: 'John',
    grandfatherName: 'John',
    familyName: 'Smith',
    localizedName: {
      firstName: 'جون',
      fatherName: 'جون',
      grandfatherName: 'جون',
      familyName: 'سميث',
    },
    nationalId: {
      idNumber: '29702031400693',
      expiryDate: '01/04/2025',
    },
    nationalities: [
      {
        country: { id: 1, name: 'Egyptian' },
        countryId: 1,
      },
    ],
    maritalStatus: {
      id: 1,
      name: 'Single',
    },
    dependants: 0,
  };

  getUser(): User {
    return this.user;
  }

  //   getUserById(id: number): User {
  //     return this.user.id===id;
  //   }
  updateUser(updatedUser: User): User {
    this.user = { ...this.user, ...updatedUser };
    return this.user;
  }
}
