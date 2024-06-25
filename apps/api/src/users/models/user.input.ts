import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class LocalizedNameInput {
  @Field() firstName: string;
  @Field() fatherName: string;
  @Field() grandfatherName: string;
  @Field() familyName: string;
}

@InputType()
export class CountryInput {
  @Field() id: string;
  @Field() name: string;
}

@InputType()
export class NationalityInput {
  @Field(() => CountryInput) country: CountryInput;
  @Field(() => Int) countryId: number;
}

@InputType()
export class NationalIdInput {
  @Field() idNumber: string;
  @Field() expiryDate: string;
}

@InputType()
export class MaritalStatusInput {
  @Field() id: string;
  @Field() name: string;
}

@InputType()
export class EditUserInput {
  @Field() firstName: string;
  @Field() fatherName: string;
  @Field() grandfatherName: string;
  @Field() familyName: string;
  @Field(() => LocalizedNameInput) localizedName: LocalizedNameInput;
  @Field(() => NationalIdInput) nationalId: NationalIdInput;
  @Field(() => [NationalityInput]) nationalities: NationalityInput[];
  @Field(() => MaritalStatusInput) maritalStatus: MaritalStatusInput;
  @Field(() => Int) dependants: number;
}
