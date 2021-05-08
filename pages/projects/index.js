import { fetchAPI } from "../../lib/api";
import ProjectCard from "../../components/ProjectCard";

const ProjectPage = ({ categories }) => {
  const projects = categories[3].articles;

  return (
    <div className="flex flex-wrap align-middle justify-center">
      {projects.map((article) => {
        return (
          <ProjectCard
            title={article.title}
            description={article.description}
            date={article.publishedAt}
            img={article.image}
            slug={article.slug}
          />
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const categories = await fetchAPI("/categories");

  return {
    props: { categories },
    revalidate: 1,
  };
}

export default ProjectPage;
