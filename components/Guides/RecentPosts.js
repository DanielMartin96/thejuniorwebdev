import Link from "next/link";
import ArticleCard from "./ArticleCard";

const RecentPosts = ({ category }) => {
  return (
    <div className="pb-4">
      <div className="flex mb-4">
        <h1 className="mr-4 text-3xl font-bold text-gray-800">
          {category.name}
        </h1>
        <Link href={`/guides/${category.slug}`}>
          <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md dark:bg-gray-800 hover:bg-indigo-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-indigo-500 dark:focus:bg-gray-700">
            See All Posts
          </button>
        </Link>
      </div>
      <hr />
      <div className="mt-4 flex justify-start">
        {category.articles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
