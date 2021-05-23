import React from "react";
import Moment from "react-moment";
import Image from "next/image";

const PostCard = ({ article }) => {
  return (
    <div className="mb-6 max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Image
        className="object-cover w-full h-64"
        src={article.image[0].url}
        alt="Article"
        width="600px"
        height="400px"
      />

      <div className="p-6">
        <div>
          <a
            href="#"
            className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
          >
            {article.title}
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {article.description}
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200">
                Daniel Martin
              </p>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                <Moment fromNow>{article.published_at}</Moment>
              </span>
            </div>
            <div>
              <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md dark:bg-gray-800 hover:bg-indigo-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-indigo-500 dark:focus:bg-gray-700">
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
