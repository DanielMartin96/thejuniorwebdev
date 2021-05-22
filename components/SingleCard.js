import Link from "next/link";

const SingleCard = ({ tech, title, description, colour, slug }) => {
  return (
    <Link href={slug}>
      <div className="w-full max-w-sm px-4 py-3 mb-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 cursor-pointer">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-800 dark:text-gray-400">
            Guide
          </span>
          <span
            className={`px-3 py-1 text-xs text-${colour}-800 uppercase bg-${colour}-200 rounded-full dark:bg-indigo-300 dark:text-indigo-900`}
          >
            {tech}
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white hover:underline ">
            {title}
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
