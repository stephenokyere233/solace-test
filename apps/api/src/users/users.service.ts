// users/users.service.ts

import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      firstName: 'Zaria',
      fatherName: 'Edward',
      grandfatherName: 'Ernest',
      familyName: 'Willie',
      localizedName: {
        firstName: 'صفوان',
        fatherName: 'حمدان',
        grandfatherName: 'هشام',
        familyName: 'عباس',
      },
      nationalId: {
        idNumber: '1c1f3fde-0581-4afb-8c7e-abacf3bc5875',
        expiryDate: '2024-07-24T22:45:29.864Z',
      },
      nationalities: [
        { country: { id: '1016', name: 'Bolivia' }, countryId: 1016 },
        { country: { id: '1117', name: 'Latvia' }, countryId: 1117 },
        {
          country: { id: '1225', name: 'Virgin Islands, U.S.' },
          countryId: 1225,
        },
      ],
      maritalStatus: { id: '27', name: 'Divorced' },
      dependants: 60,
    },
  ];

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  editUser(id: number, userData: Partial<User>): User {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    this.users[userIndex] = { ...this.users[userIndex], ...userData };
    return this.users[userIndex];
  }
}
