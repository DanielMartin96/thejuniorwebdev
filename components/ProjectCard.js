import React from "react";
import Image from "./image";
import Link from "next/link";
import Moment from "react-moment";

const ProjectCard = ({ title, description, date, img, slug }) => {
  return (
    <div class="overflow-hidden lg:w-4/12 md:w:full m-4 bg-white rounded-lg shadow-md dark:bg-gray-800">


      <div class="p-6">
        <div>
          <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            Project
          </span>
          <Link href={"/projects/" + slug}>
            <a class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">
              {title}
            </a>
          </Link>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        <div class="mt-4">
          <div class="flex items-center">
            <div class="flex items-center">
              <img
                class="object-cover h-10 rounded-full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
              />
              <a
                href="#"
                class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
              >
                Daniel Martin
              </a>
            </div>
            <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">
              <Moment fromNow></Moment>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
