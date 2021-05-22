import React from "react";

const ArticleCard = ({ article }) => {
  console.log(article.categories);
  return (
    <div class="w-full max-w-sm px-4 py-3 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <div class="flex items-center justify-end">
        {article.categories.map((category) => {
          return (
            <span
              key={category.name}
              class="px-3 py-1 mx-1 text-xs text-indigo-800 uppercase bg-indigo-200 rounded-full dark:bg-indigo-300 dark:text-indigo-900"
            >
              {category.name}
            </span>
          );
        })}
      </div>

      <div>
        <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
          {article.title}
        </h1>
        <p class="my-2 text-sm text-gray-600 dark:text-gray-300">
          {article.description}
        </p>

        <button class="px-4 py-2 my-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
