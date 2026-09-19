import SignUp from "@/Components/SignUp/SignUp";

export const metadata = {
  title: "login",
  description: "log into your account using email and password",
};

export default function loginPage() {
  return <SignUp login />;
}
