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

type CreateUserParams = {
  clerkId: string;
  name: string;
  email: string;
  avatarUrl: string;
};

export const createUser = async (user: CreateUserParams) => {
  try {
    connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
};
