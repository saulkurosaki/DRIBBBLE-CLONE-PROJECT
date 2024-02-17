"use server";

import { connectToDatabase } from "../mongoose";
import { CreateNewProjectParams, UpdateProjectParams } from "@/types";
import { uploadImage } from "../utils";
import Project from "@/database/project.model";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";

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

export const fetchAllProjects = async () => {
  try {
    connectToDatabase();

    const allProjects = await Project.find();

    return JSON.parse(JSON.stringify(allProjects));
  } catch (error) {
    console.log(error);
  }
};

export const getProjectDetails = async (id: string) => {
  try {
    connectToDatabase();

    const project = await Project.findById(id);

    return JSON.parse(JSON.stringify(project));
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = async (
  projectId: string,
  creatorId: string | undefined
) => {
  try {
    connectToDatabase();

    await Project.findByIdAndDelete(projectId);

    await User.findByIdAndUpdate(creatorId, {
      $pull: { projects: projectId },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProject = async ({
  form,
  projectId,
  currentUserId,
}: UpdateProjectParams) => {
  try {
    connectToDatabase();

    const projectToUpdate = await Project.findById(projectId);

    if (
      !projectToUpdate ||
      projectToUpdate.createdBy.toHexString() !== currentUserId
    ) {
      throw new Error("Unauthorized or event not found");
    }

    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      { ...form },
      { new: true }
    );

    return JSON.parse(JSON.stringify(updatedProject));
  } catch (error) {
    console.log(error);
  }
};
