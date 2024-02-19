import Categories from "@/components/Categories";
import ProjectCard from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/actions/project.actions";
import { ProjectInterface } from "@/types";

type SearchParams = {
  category?: string;
};

type Props = {
  searchParams: SearchParams;
};

const Home = async ({ searchParams: { category } }: Props) => {
  const projects = await fetchAllProjects(category);

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
            userId={project.createdBy}
          />
        ))}
      </section>
    </section>
  );
};

export default Home;
