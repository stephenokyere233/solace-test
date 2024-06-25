export type FieldName =
  | "nationalId"
  | "nationalIdExpiry"
  | "title"
  | "firstName"
  | "fatherName"
  | "grandfatherName"
  | "familyName"
  | "dateOfBirth"
  | "gender"
  | "nationality"
  | "additionalNationality"
  | "passportNo"
  | "passportIssueDate"
  | "passportExpiryDate"
  | "maritalStatus"
  | "dependants"
  | "firstNameArabic"
  | "fatherNameArabic"
  | "grandFatherNameArabic"
  | "lastNameArabic";

export interface Field {
  label: string;
  name: FieldName | "null";
}

export interface BasicInfoFormValues {
  nationalId: string;
  nationalIdExpiry: string;
  title: string;
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  firstNameArabic: string;
  fatherNameArabic: string;
  grandFatherNameArabic: string;
  lastNameArabic: string;
  familyName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  additionalNationality: string;
  passportNo: string;
  passportIssueDate: string;
  passportExpiryDate: string;
  maritalStatus: string;
  dependants: number;
}
