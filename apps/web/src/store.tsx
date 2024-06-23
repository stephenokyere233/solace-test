import ProfileInfo from "./components/profile-info";
import FinancialInfo from "./components/finance-info";

export const TABS = [
  {
    name: "Personal Information",
    value: "personal-info",
    content: <ProfileInfo />,
  },
  {
    name: "Financial Information",
    value: "financial-info",
    content: <FinancialInfo />,
  },
];
