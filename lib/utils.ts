import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getProjectDetails } from "./actions/project.actions";
import { getUserById } from "./actions/user.actions";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const uploadImage = async (imagePath: string) => {
  try {
    const response = await fetch(`${serverUrl}/api/upload`, {
      method: "POST",
      body: JSON.stringify({ path: imagePath }),
    });

    return response.json();
  } catch (error) {
    throw error;
  }
};

export async function getUserProjects(
  userProjectsIds: string[] | undefined
): Promise<any[]> {
  let userProjects: any[] = [];
  let promises: Promise<any>[] = [];

  userProjectsIds?.forEach((project_id) => {
    const promise = getProjectDetails(project_id)
      .then((fetchedProject) => {
        return JSON.parse(JSON.stringify(fetchedProject));
      })
      .then((result) => {
        userProjects.push(result);
      })
      .catch((error) => {
        console.error(error);
      });

    promises.push(promise);
  });

  await Promise.all(promises);

  return userProjects;
}

export async function enhanceProjectsWithAuthor(projects: any[]) {
  const fetchedProjects = await Promise.all(
    projects.map(async (project) => {
      const authorDetails = await getUserById(project.createdBy);
      const author = authorDetails.name;
      const authorImage = authorDetails.avatarUrl;

      return {
        ...project,
        author,
        authorImage,
      };
    })
  );

  return fetchedProjects;
}
