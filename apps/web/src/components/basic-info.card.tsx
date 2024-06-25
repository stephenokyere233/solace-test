"use client";
import { BasicInfoFormValues, Field, FieldName } from "@/interfaces";
import createApolloClient from "@/lib/apollo-client";
import { uuid } from "@/lib/generate-id";
import { EDIT_USER, GET_USER } from "@/lib/queries";
import { Button } from "@mui/base";
import {
  Card,
  CardContent,
  OutlinedInput,
  FormControl,
  CircularProgress,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import { toast } from "sonner";

const fields: Field[] = [
  { label: "National ID Number", name: "nationalId" },
  { label: "National ID Expiry Date", name: "nationalIdExpiry" },
  { label: "Title", name: "title" },
  { label: "", name: "null" },
  { label: "First Name", name: "firstName" },
  { label: "Father Name", name: "fatherName" },
  { label: "Grand Father Name", name: "grandfatherName" },
  { label: "Family Name", name: "familyName" },
  { label: "الأسم الأول", name: "firstNameArabic" },
  { label: "اسم الأب", name: "fatherNameArabic" },
  { label: "اسم الجد", name: "grandFatherNameArabic" },
  { label: "اللقب / اسم العائلة", name: "lastNameArabic" },
  { label: "Date of Birth", name: "dateOfBirth" },
  { label: "Gender", name: "gender" },
  { label: "Nationality", name: "nationality" },
  { label: "Additional Nationality", name: "additionalNationality" },
  { label: "Passport Number", name: "passportNo" },
  { label: "Passport Issue Date", name: "passportIssueDate" },
  { label: "Passport Expiry Date", name: "passportExpiryDate" },
  { label: "", name: "null" },
  { label: "Marital Status", name: "maritalStatus" },
  { label: "Dependencies", name: "dependants" },
  { label: "", name: "null" },
  { label: "", name: "null" },
];

const EditForm = ({
  onSubmit,
  loading,
  register,
}: {
  onSubmit: () => void;
  loading: boolean;
  register: UseFormRegister<BasicInfoFormValues>;
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex justify-between">
        <h2 className="text-[20px] font-semibold">Basic Information</h2>
        <Button
          type="submit"
          className="bg-[#0F6CBD] px-4 rounded-lg w-[100px] p-2 text-sm text-white font-semibold"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Save"}
        </Button>
      </div>
      <div className="grid-cols-4 grid gap-5">
        {fields.map((field, index) => (
          <FormControl key={field.name + index} variant="outlined" className="space-y-2">
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
      </div>
    </form>
  );
};

const getFieldValue = (field: Field, user: any) => {
  if (!user) return "N/A";

  switch (field.name) {
    case "nationalId":
      return user.nationalId?.idNumber ?? "N/A";
    case "nationalIdExpiry":
      return user.nationalId?.expiryDate
        ? new Date(user.nationalId.expiryDate).toLocaleDateString()
        : "N/A";
    case "nationality":
      return user.nationalities[0]?.country.name || "N/A";
    case "additionalNationality":
      return (
        user.nationalities
          .slice(1)
          .map((nat: any) => nat.country.name)
          .join(", ") || "N/A"
      );
    case "maritalStatus":
      return user.maritalStatus?.name || "N/A";
    case "title":
      return "Mr.";
    case "firstNameArabic":
      return user.localizedName?.firstName || "N/A";
    case "fatherNameArabic":
      return user.localizedName?.fatherName || "N/A";
    case "grandFatherNameArabic":
      return user.localizedName?.grandfatherName || "N/A";
    case "lastNameArabic":
      return user.localizedName?.familyName || "N/A";
    default:
      console.log(user[field.name], field.name);
      return user[field.name] || "N/A";
  }
};

const DisplayData = ({
  user,
  setIsEditing,
}: {
  user: any;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}) => {
  console.log(user);
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-[20px] font-semibold">Basic Information</h2>
        <Button
          type="button"
          className="bg-[#0F6CBD] rounded-lg px-4 p-2 w-[100px] text-sm text-white font-semibold"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
      </div>
      <div className="grid-cols-4 grid gap-5">
        {fields.map((field, index) =>
          field.name !== "null" ? (
            <div key={index} className="flex flex-col gap-2">
              <p className="text-[14px] text-[#737791]">{field.label}</p>
              <p className="font-semibold text-[#151D48] truncate max-w-[200px]">
                {getFieldValue(field, user)}
              </p>
            </div>
          ) : (
            <div key={index} className="invisible" />
          )
        )}
      </div>
    </>
  );
};

const BasicInformationCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const client = createApolloClient();
  const { register, handleSubmit, reset } = useForm<BasicInfoFormValues>();

  const generateUniqueId = (toString: boolean = false) => {
    return toString ? uuid.rnd().toString() : Number(uuid.rnd());
  };

  const onSubmit = async (data: BasicInfoFormValues) => {
    const user = {
      nationalId: { idNumber: data.nationalId, expiryDate: data.nationalIdExpiry },
      firstName: data.firstName,
      fatherName: data.fatherName,
      grandfatherName: data.grandfatherName,
      familyName: data.familyName,
      localizedName: {
        firstName: data.firstNameArabic,
        fatherName: data.fatherNameArabic,
        grandfatherName: data.grandFatherNameArabic,
        familyName: data.lastNameArabic,
      },
      nationalities: [
        {
          country: {
            name: data.nationality,
            id: generateUniqueId(true),
          },
          countryId: generateUniqueId(),
        },
        ...data.additionalNationality.split(", ").map((name) => ({
          country: {
            name: name,
            id: generateUniqueId(true),
          },
          countryId: generateUniqueId(),
        })),
      ],
      maritalStatus: { name: data.maritalStatus, id: uuid.rnd() },
      dependants: data.dependants,
    };

    setLoading(true);

    try {
      const response = await client.mutate({
        mutation: EDIT_USER,
        variables: {
          id: 1,
          userData: user,
        },
      });
      console.log("Update response:", response);
      setTimeout(() => {
        fetchUserData(1);
        setIsEditing(false);
      }, 2000); // Delay the update to persist loading state for 2 seconds
    } catch (error) {
      console.error("Error updating user data:", error);
      toast.error("Failed to update user data.");
      setLoading(false);
    }
  };

  const fetchUserData = async (userId: number) => {
    setLoading(true);
    try {
      const response = await client.query({
        query: GET_USER,
        variables: { id: userId },
      });
      const userData = response.data.user;
      setUser(userData);

      const formValues: BasicInfoFormValues = {
        nationalId: userData.nationalId.idNumber,
        nationalIdExpiry: new Date(userData.nationalId.expiryDate).toLocaleDateString(),
        title: "Mr.",
        firstName: userData.firstName,
        fatherName: userData.fatherName,
        grandfatherName: userData.grandfatherName,
        familyName: userData.familyName,
        firstNameArabic: userData.localizedName.firstName,
        fatherNameArabic: userData.localizedName.fatherName,
        grandFatherNameArabic: userData.localizedName.grandfatherName,
        lastNameArabic: userData.localizedName.familyName,
        dateOfBirth: "",
        gender: "Male",
        nationality: userData.nationalities[0]?.country.name || "-",
        additionalNationality:
          userData.nationalities
            .slice(1)
            .map((nat: any) => nat.country.name)
            .join(", ") || "-",
        passportNo: "",
        passportIssueDate: "",
        passportExpiryDate: "",
        maritalStatus: userData.maritalStatus.name,
        dependants: userData.dependants,
      };
      reset(formValues);
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Failed to fetch user data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="rounded-3xl p-5 min-w-[350px] h-max min-h-[350px]">
      <CardContent className="space-y-5 h-full">
        {loading && (
          <div className="flex flex-col min-h-[320px] h-full">
            <h2 className="text-[20px] font-semibold">Basic Information</h2>
            <div className="w-full h-full flex-1 flex items-center justify-center">
              <CircularProgress />
            </div>
          </div>
        )}

        {!loading && isEditing && (
          <EditForm
            onSubmit={handleSubmit(onSubmit)}
            loading={loading}
            register={register}
          />
        )}
        {!loading && !isEditing && (
          <DisplayData user={user} setIsEditing={setIsEditing} />
        )}
      </CardContent>
    </Card>
  );
};

export default BasicInformationCard;
