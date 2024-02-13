import ProjectCard from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/actions/project.actions";
import { ProjectInterface } from "@/types";

const Home = async () => {
  const projects = await fetchAllProjects();

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
      <h1>Categories</h1>

      <section className="projects-grid">
        {projects.map((project: ProjectInterface) => (
          <ProjectCard
            key={project?._id}
            id={project?._id}
            image={project?.image}
            title={project?.title}
          />
        ))}
      </section>

      <h1>LoadMore</h1>
    </section>
  );
};

export default Home;
