import SingleCard from "../../components/SingleCard";
import { fetchAPI } from "../../lib/api";

const GuidePage = ({ categories }) => {
  const HTML = categories[1].articles;
  const CSS = categories[0].articles;
  const JS = categories[2].articles;

  return (
    <section className="container mt-1 p-6 mx-auto bg-white">
      <div className="flex align-middle">
        <h2 className="text-xl mb-5  px-6 py-2 font-medium text-blue-800 capitalize underline md:text-2xl">
          Latest HTML Posts
        </h2>
      </div>

      <div className="flex flex-wrap justify-center">
        {HTML.map((article) => {
          return (
            <SingleCard
              tech="HTML"
              colour="blue"
              title={article.title}
              description={article.description}
              key={article.id}
              slug={`'/html/${article.slug}`}
            />
          );
        })}
      </div>
      <hr className="my-10" />
      <div className="flex align-middle">
        <h2 className="text-xl mb-5  px-6 py-2 font-medium text-yellow-800 capitalize underline md:text-2xl">
          Latest CSS Posts
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {CSS.map((article) => {
          return (
            <SingleCard
              tech="CSS"
              colour="yellow"
              title={article.title}
              description={article.description}
              key={article.id}
              slug={`'/css/${article.slug}`}
            />
          );
        })}
      </div>
      <hr className="my-10" />
      <div className="flex align-middle">
        <h2 className="text-xl mb-5  px-6 py-2 font-medium text-red-800 capitalize underline md:text-2xl">
          Latest JavaScript Posts
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {JS.map((article) => {
          return (
            <SingleCard
              tech="JavaScript"
              colour="red"
              title={article.title}
              description={article.description}
              key={article.id}
              slug={`'/javascript/${article.slug}`}
            />
          );
        })}
      </div>
    </section>
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

export default GuidePage;
