"use server";

import { connectToDatabase } from "../mongoose";
import { CreateNewProjectParams } from "@/types";
import { uploadImage } from "../utils";
import Project from "@/database/project.model";
import User from "@/database/user.model";

export const createNewProject = async (params: CreateNewProjectParams) => {
  try {
    connectToDatabase();

    const { form, creatorId } = params;

    const imageUrl = await uploadImage(form.image);

    if (imageUrl.url) {
      const newProject = await Project.create({
        ...form,
        image: imageUrl.url,
        createdBy: creatorId,
      });

      // Update User model
      await User.findByIdAndUpdate(creatorId, {
        $push: { projects: newProject._id },
      });

      return JSON.parse(JSON.stringify(newProject));
    }
  } catch (error) {
    console.log(error);
  }
};
