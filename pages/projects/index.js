import { fetchAPI } from "../../lib/api";
import ProjectCard from "../../components/ProjectCard";

const ProjectPage = ({ categories }) => {
  const projects = categories[3].articles;

  return (
    <div className="flex flex-wrap align-middle justify-center">
      {projects.map((article) => {
        return (
          <ProjectCard
            title={article.Title}
            description={article.Description}
            date={article.PublishedAt}
            img={article.Image}
            slug={article.Slug}
          />
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [categories] = await Promise.all([
    fetchAPI("/categories"),
  ]);

  return {
    props: { categories },
    revalidate: 1,
  };
}

export default ProjectPage;
