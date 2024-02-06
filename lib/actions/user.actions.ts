"use server";

import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";

export const getUser = async (email: string) => {
  try {
    connectToDatabase();

    const user = await User.findOne({ email });

    return user;
  } catch (error) {
    console.log(error);
  }
};

// export const createUser = async (
//   name: string,
//   email: string,
//   avatarUrl: string
// ) => {
//   try {
//     connectToDatabase();

//     const newUser = await User.create({
//       name,
//       email,
//       avatarUrl,
//     });

//     return newUser;
//   } catch (error) {
//     console.log(error);
//   }
// };
