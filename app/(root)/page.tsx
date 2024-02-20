import Categories from "@/components/Categories";
import ProjectCard from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/actions/project.actions";
import { getUserById } from "@/lib/actions/user.actions";
import { enhanceProjectsWithAuthor } from "@/lib/utils";
import { ProjectInterface, ProjectProps } from "@/types";

type SearchParams = {
  category?: string;
};

type Props = {
  searchParams: SearchParams;
};

const Home = async ({ searchParams: { category } }: Props) => {
  const fetchedProjects = await fetchAllProjects(category);

  const projects = await enhanceProjectsWithAuthor(fetchedProjects);

  if (projects.length === 0) {
    return (
      <section className="flexStart flex-col paddings">
        <p className="no-result-text text-center">
          No projects found, go create some first.
        </p>
      </section>
    );
  }

  return (
    <section className="flex-start flex-col paddings mb-16">
      <Categories />

      <section className="projects-grid">
        {projects.map((project: ProjectInterface) => (
          <ProjectCard
            key={project?._id}
            id={project?._id}
            image={project?.image}
            title={project?.title}
            name={project.author}
            avatarUrl={project.authorImage}
            userId={project.createdBy}
          />
        ))}
      </section>
    </section>
  );
};

export default Home;
