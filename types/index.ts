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

export type ProjectProps = {
  title: string;
  description: string;
  image?: string;
  liveSiteUrl?: string;
  githubUrl?: string;
  category?: string;
  createdBy: Object;
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
