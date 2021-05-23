import React from "react";
import Moment from "react-moment";

const PostCard = ({ article }) => {
  return (
    <div class="mb-6 max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <img
        class="object-cover w-full h-64"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
      />

      <div class="p-6">
        <div>
          <a
            href="#"
            class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
          >
            {article.title}
          </a>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {article.description}
          </p>
        </div>

        <div class="mt-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200">
                Daniel Martin
              </p>
              <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">
                <Moment fromNow>{article.published_at}</Moment>
              </span>
            </div>
            <div>
              <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md dark:bg-gray-800 hover:bg-indigo-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-indigo-500 dark:focus:bg-gray-700">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
