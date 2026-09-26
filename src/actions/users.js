import { usersDB } from "@/data/usersDB";
import { isEmail, minLength } from "@/helpers/validators";

export const loginUser = ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Please provide email and password!");
  }

  if (!isEmail({ value: email })) {
    throw new Error("Please provide a valid email!");
  }

  if (!minLength({ value: password, min: 6 })) {
    throw new Error("Password should be at least 6 chars!");
  }

  // search user
  const userExist = usersDB.find((user) => user.email === email);
  console.log(userExist);

  // check if user exist
  if (!userExist) {
    throw new Error("No user exist with this email!");
  }

  // check if password correct

  // return user
};
