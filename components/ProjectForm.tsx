"use client";

import { UserProps } from "@/types";
import Image from "next/image";
import { ChangeEvent } from "react";

type Props = {
  type: string;
  user: UserProps;
};

const ProjectForm = ({ type, user }: Props) => {
  const handleFormSubmit = (e: React.FormEvent) => {};

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {};

  const form = {
    image: "",
  };

  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart flex_image-container">
        <label htmlFor="poster" className="flexCenter flex_image-label">
          {!form.image && "Choose a poster for your image"}
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          required={type === "create"}
          className="form_image-input"
          onChange={handleChangeImage}
        />
        {form.image && (
          <Image
            src={form?.image}
            alt="Project poster"
            className="sm:p-10 object-contain z-20"
            fill
          />
        )}
      </div>
    </form>
  );
};

export default ProjectForm;
