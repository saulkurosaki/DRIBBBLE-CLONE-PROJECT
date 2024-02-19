import Image from "next/image";

import Link from "next/link";
import ProjectCard from "./ProjectCard";
import CustomButton from "./CustomButton";
import { ProjectProps, UserProps } from "@/types";
import { getUserProjects } from "@/lib/utils";

type Props = {
  user: UserProps;
};

const ProfilePage = async ({ user }: Props) => {
  const userProjectsIds = user?.projects;
  const userProjects: any[] = await getUserProjects(userProjectsIds);

  return (
    <section className="flexCenter flex-col max-w-10xl w-full mx-auto paddings">
      <section className="flexBetween max-lg:flex-col gap-10 w-full">
        <div className="flex items-start flex-col w-full">
          <Image
            src={user?.avatarUrl!}
            width={100}
            height={100}
            className="rounded-full"
            alt="user image"
          />
          {/* <p className="text-4xl font-bold mt-10">{user?.name}</p> */}
          {/* <p className="md:text-5xl text-3xl font-extrabold md:mt-10 mt-5 max-w-lg">
            I’m a Software Engineer and a Front-End Web Developer 👋
          </p> */}

          <div className="flex mt-8 gap-5 w-full flex-wrap">
            {/* <CustomButton
              title="Follow"
              leftIcon="/plus-round.svg"
              bgColor="bg-light-white-400 !w-max"
              textColor="text-black-100"
            /> */}
            {/* <Link href={`mailto:${user?.email}`}>
              <CustomButton title="Hire Me" leftIcon="/email.svg" />
            </Link> */}
          </div>
        </div>

        {/* {userProjects?.length > 0 ? (
          <Image
            src={userProjects[0]?.image}
            alt="project image"
            width={739}
            height={554}
            className="rounded-xl object-contain"
          />
        ) : (
          <Image
            src="/profile-post.png"
            width={739}
            height={554}
            alt="project image"
            className="rounded-xl"
          />
        )} */}
      </section>

      {/* <section className="flexStart flex-col lg:mt-28 mt-16 w-full">
        <p className="w-full text-left text-lg font-semibold">Recent Work</p>

        <div className="profile_projects">
          {userProjects?.map((project: ProjectProps) => (
            <ProjectCard
              key={`${project?._id}`}
              id={project?._id!}
              image={project?.image}
              title={project?.title}
              name={user.name}
              avatarUrl={user.avatarUrl!}
              userId={user._id!}
            />
          ))}
        </div>
      </section> */}
    </section>
  );
};

export default ProfilePage;
