import { ProjectForm } from "@/common.types";
import { MouseEventHandler } from "react";

// Server Actions Params types
export type CreateUserParams = {
  clerkId: string;
  name: string;
  email: string;
  avatarUrl: string;
};

export type CreateNewProjectParams = {
  form: ProjectForm;
  creatorId: string;
};

// Normal Project Props types
export type UserProps = {
  _id?: string | undefined;
  clerkId: string;
  name: string;
  email: string;
  avatarUrl?: string;
  description?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  projects?: Array<string>;
};

export type ProjectProps = {
  _id?: string;
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
  createdBy: string;
};

export type FormFieldProps = {
  type?: string;
  title: string;
  state: string;
  placeholder: string;
  isTextArea?: boolean;
  setState: (value: string) => void;
};

export type CustomMenuProps = {
  title: string;
  state: string;
  filters: Array<string>;
  setState: (value: string) => void;
};

export type CustomButtonProps = {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
};

export type ProjectInterface = {
  _id: string;
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
  createdBy: string;
  author?: string;
  authorImage?: string;
};

export type ProjectCardProps = {
  id: string;
  image: string;
  title: string;
  name?: string;
  avatarUrl?: string;
  userId: string;
};

export type RelatedProjectsProps = {
  user: UserProps;
  projectId: string;
};

export type ProjectFormProps = {
  type: string;
  user: UserProps;
  project?: ProjectInterface;
};

export type ProjectActionsProps = {
  user: UserProps;
  projectId: string;
};

export type UpdateProjectParams = {
  form: {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
  };
  projectId: string | undefined;
  currentUserId: string | undefined;
};
