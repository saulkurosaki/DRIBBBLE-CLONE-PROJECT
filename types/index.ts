export type ProjectProps = {
  title: string;
  description: string;
  image?: string;
  liveSiteUrl?: string;
  githubUrl?: string;
  category?: string;
  createdBy: Object;
};

export type UserProps = {
  clerkId: string;
  name: string;
  email: string;
  avatarUrl?: string;
  description?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  projects?: Array<Object>;
};
