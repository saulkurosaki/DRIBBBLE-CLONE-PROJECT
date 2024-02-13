"use client";

import { ProjectCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProjectCard = ({ id, image, title, userId }: ProjectCardProps) => {
  const [randomLikes, setRandomLikes] = useState(0);
  const [randomViews, setRandomViews] = useState("");

  useEffect(() => {
    setRandomLikes(Math.floor(Math.random() * 10000));
    setRandomViews(
      String((Math.floor(Math.random() * 10000) / 1000).toFixed(1) + "k")
    );
  }, []);

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

      <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
        <p>
          <span className="font-bold text-[#9747FF]">CreatorId:</span>{" "}
          <Link href={`/profile/${userId}`} className="hover:text-[#9747FF]">
            {userId}
          </Link>
        </p>

        <div className="flexCenter gap-3">
          <div className="flexCenter gap-2">
            <Image src="/hearth.svg" alt="heart" width={13} height={12} />
            <p className="text-sm">{randomLikes}</p>
          </div>
          <div className="flexCenter gap-2">
            <Image src="/eye.svg" alt="views" width={13} height={12} />
            <p className="text-sm">{randomViews}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
