"use client";

import { deleteProject } from "@/lib/actions/project.actions";
import { ProjectActionsProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProjectActions = ({ user, projectId }: ProjectActionsProps) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const router = useRouter();

  const handleDeleteProject = async () => {
    setIsDeleting(true);

    try {
      await deleteProject(projectId, user?._id);

      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Link
        href={`/edit-project/${projectId}`}
        className="flexCenter edit-action_btn"
      >
        <Image src="/pencile.svg" width={15} height={15} alt="edit" />
      </Link>

      <button
        type="button"
        disabled={isDeleting}
        className={`flexCenter delete-action_btn ${
          isDeleting ? "bg-gray" : "bg-primary-purple"
        }`}
        onClick={handleDeleteProject}
      >
        <Image src="/trash.svg" width={15} height={15} alt="delete" />
      </button>
    </>
  );
};

export default ProjectActions;
