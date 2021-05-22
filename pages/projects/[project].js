import React from "react";
import { fetchAPI } from "../../lib/api";
import Image from "../../components/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const Project = ({ article }) => {
  console.log(article);
  return (
    <article className="container mx-auto max-w-2xl px-6">
      <div className="mt-10">
        <h1 className="text-5xl font-bold underline pb-2">{article.title}</h1>
        <p className="font-light text-gray-800 text-3xl mb-2">
          {article.description}
        </p>
        <div className="flex justify-between mt-4 text-sm flex-wrap align-middle">
          <div className="flex font-light pt-3">
            <p className="text-indigo-500 pr-2">{article.author.name}</p>
            <p className="pr-2 text-gray-400">15 hours ago</p>
            <p className="pr-2 text-gray-400">10 minute read</p>
          </div>
          <div>
            <Link href="/projects">
              <button class="px-6 py-2 font-medium tracking-wide text-indigo-800 capitalize transition-colors duration-200 transform bg-indigo-200 rounded-md dark:bg-gray-800 hover:bg-indigo-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-indigo-500 dark:focus:bg-gray-700">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4">
        <Image image={article.image} />
      </div>
      <div>
        <ReactMarkdown id="markdown">{article.content}</ReactMarkdown>
      </div>
    </article>
  );
};





export default Project;
