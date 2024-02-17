import { getUserProjects } from "@/lib/utils";
import { ProjectProps, RelatedProjectsProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedProjects = async ({ user, projectId }: RelatedProjectsProps) => {
  const userProjectsIds = user?.projects;
  let userProjects: any[] = await getUserProjects(userProjectsIds);
  const filteredProjects = userProjects?.filter(
    (project) => project?._id !== projectId
  );

  return (
    <section className="flex flex-col mt-32 w-full">
      <div className="flexBetween">
        <p className="text-base font-bold">More by {user?.name}</p>
        <Link
          href={`/profile/${user?._id}`}
          className="text-primary-purple text-base"
        >
          View All
        </Link>
      </div>

      <div className="related_projects-grid">
        {filteredProjects?.map((project: ProjectProps) => (
          <div
            className="flexCenter related_project-card drop-shadow-card"
            key={project?._id}
          >
            <Link
              href={`/project/${project?._id}`}
              className="flexCenter group relative w-full h-full"
            >
              <Image
                src={project?.image}
                width={414}
                height={314}
                className="w-full h-full object-cover rounded-2xl"
                alt="project image"
              />

              {/* <div className="hidden group-hover:flex related_project-card_title">
                <p className="w-full">{project?.title}</p>
              </div> */}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProjects;
