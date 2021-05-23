import Link from "next/link";
import { fetchAPI } from "../../../lib/api";
import PostCard from "../../../components/Guides/TechPage/PostCard";

const TechPage = ({ category }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex">
        <h1 className="text-3xl mr-4 font-bold text-gray-800">
          {category.name}
        </h1>
        <Link href="/guides">
          <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md dark:bg-gray-800 hover:bg-indigo-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-indigo-500 dark:focus:bg-gray-700">
            Back
          </button>
        </Link>
      </div>
      <hr />
      <div className="flex flex-wrap mt-4">
        {category.articles.map((article) => (
          <PostCard article={article} key={article.name} tech={category.name} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");

  return {
    paths: categories.map((category) => ({
      params: {
        tech: category.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = await fetchAPI(`/categories?slug=${params.tech}`);

  return {
    props: { category: category[0] },
    revalidate: 1,
  };
}

export default TechPage;
