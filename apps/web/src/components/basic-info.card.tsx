import { Button } from "@mui/base";
import { Card, CardContent, OutlinedInput, FormControl } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FieldName =
  | "nationalId"
  | "nationalIdExpiry"
  | "title"
  | "firstName"
  | "fatherName"
  | "grandFatherName"
  | "familyName"
  | "dateOfBirth"
  | "gender"
  | "nationality"
  | "additionalNationality"
  | "passportNo"
  | "passportIssueDate"
  | "passportExpiryDate"
  | "maritalStatus"
  | "dependencies";

interface Field {
  label: string;
  name: FieldName | "null";
}

interface FormValues {
  nationalId: string;
  nationalIdExpiry: string;
  title: string;
  firstName: string;
  fatherName: string;
  grandFatherName: string;
  familyName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  additionalNationality: string;
  passportNo: string;
  passportIssueDate: string;
  passportExpiryDate: string;
  maritalStatus: string;
  dependencies: number;
}

const BasicInformationCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const defaultValues: FormValues = {
    nationalId: "29702031400693",
    nationalIdExpiry: "01/04/2025",
    title: "Mr.",
    firstName: "John",
    fatherName: "John",
    grandFatherName: "John",
    familyName: "Smith",
    dateOfBirth: "01/04/1980",
    gender: "Male",
    nationality: "Egyptian",
    additionalNationality: "-",
    passportNo: "A135464",
    passportIssueDate: "01/04/1980",
    passportExpiryDate: "01/04/1980",
    maritalStatus: "Single",
    dependencies: 0,
  };
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const fields: Field[] = [
    { label: "National ID Number", name: "nationalId" },
    { label: "National ID Expiry Date", name: "nationalIdExpiry" },
    { label: "Title", name: "title" },
    { label: "", name: "null" },
    { label: "First Name", name: "firstName" },
    { label: "Father Name", name: "fatherName" },
    { label: "Grand Father Name", name: "grandFatherName" },
    { label: "Family Name", name: "familyName" },
    { label: "Date of Birth", name: "dateOfBirth" },
    { label: "Gender", name: "gender" },
    { label: "Nationality", name: "nationality" },
    { label: "Additional Nationality", name: "additionalNationality" },
    { label: "Passport Number", name: "passportNo" },
    { label: "Passport Issue Date", name: "passportIssueDate" },
    { label: "Passport Expiry Date", name: "passportExpiryDate" },
    { label: "", name: "null" },
    { label: "Marital Status", name: "maritalStatus" },
    { label: "Dependencies", name: "dependencies" },
    { label: "", name: "null" },
    { label: "", name: "null" },
  ];

  return (
    <Card className="rounded-3xl p-5 min-w-[350px] h-max">
      <CardContent className="space-y-5">
        <div className="flex justify-between">
          <h2 className="text-[20px] font-semibold">Basic Information</h2>
          {isEditing ? (
            <Button
              className="bg-[#0F6CBD] px-4 rounded-lg w-[100px] p-2 text-sm text-white font-semibold "
              onClick={handleCancelClick}
            >
              Save
            </Button>
          ) : (
            <Button
              className="bg-[#0F6CBD] rounded-lg px-4 p-2 w-[100px] text-sm text-white font-semibold"
              onClick={handleEditClick}
            >
              Edit
            </Button>
          )}
        </div>
        {isEditing ? (
          <form onSubmit={handleSubmit(onSubmit)} className="grid-cols-4 grid gap-5">
            {fields.map((field, index) => (
              <FormControl key={field.name} variant="outlined" className="space-y-2">
                <label htmlFor={field.name} className="text-[14px] text-[#737791]">
                  {field.label}
                </label>
                {field.name === "null" ? (
                  <div className="invisible" />
                ) : (
                  <OutlinedInput
                    {...register(field.name as FieldName)}
                    id={field.name}
                    className="rounded-xl hover:border-blue-500"
                    aria-describedby="outlined-weight-helper-text"
                    placeholder={field.label}
                    inputProps={{
                      "aria-label": field.label,
                    }}
                  />
                )}
              </FormControl>
            ))}
          </form>
        ) : (
          <div className="grid-cols-4 grid gap-5">
            {fields.map((field, index) => (
              <div key={index} className="flex flex-col gap-2">
                <p className="text-[14px] text-[#737791]">{field.label}</p>
                <p className="font-semibold text-[#151D48]">
                  {defaultValues[field.name as FieldName]}
                </p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BasicInformationCard;
