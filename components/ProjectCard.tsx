import { ProjectCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ id, image, title }: ProjectCardProps) => {
  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
      <Link
        href={`/project/${id}`}
        className="flexCenter group relative w-full h-full"
      >
        <Image
          src={image}
          alt="Project Image"
          width={414}
          height={314}
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="hidden group-hover:flex profile_card-title">
          <p className="w-full">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
