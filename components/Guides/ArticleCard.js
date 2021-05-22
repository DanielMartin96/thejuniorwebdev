import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div class="w-full max-w-sm px-4 py-3 mx-auto mb-4  bg-white rounded-md shadow-md dark:bg-gray-800">
      <div>
        <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
          {article.title}
        </h1>
        <p class="my-2 text-sm text-gray-600 dark:text-gray-300">
          {article.description.substring(0, 200) + "..."}
        </p>

        <button class="px-4 py-2 my-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md dark:bg-gray-800 hover:bg-indigo-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-indigo-500 dark:focus:bg-gray-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
