import React, { useEffect, useState } from "react";
import { fetchAPI } from "../../../lib/api";
import Moment from "react-moment";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Post = ({ article }) => {
  const [tech, setTech] = useState("");

  useEffect(() => {
    const pathname = window.location.pathname;
    setTech(pathname.split("/")[2]);
  }, []);

  return (
    <div className="container max-w-xl mx-auto p-4 flex justify-center flex-col">
      <h1 className="text-4xl font-bold">{article.title}</h1>
      <div className="flex font-light my-4 justify-between">
        <div>
          <p className="text-indigo-400 mr-2">{article.writers[0].name}</p>
          <p className="text-gray-400">
            <Moment fromNow>{article.published_at}</Moment>
          </p>
        </div>

        <Link href={`/guides/${tech}`}>
          <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md dark:bg-gray-800 hover:bg-indigo-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-indigo-500 dark:focus:bg-gray-700">
            Back
          </button>
        </Link>
      </div>
      <Image src={article.image[0].url} height="300px" width="500px" />
      <ReactMarkdown className="my-4">{article.content}</ReactMarkdown>
    </div>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");
  let array = [];
  categories.map((category) => {
    for (let i = 0; i < category.articles.length; i++) {
      return array.push({
        params: {
          slug: category.articles[i].slug,
          tech: category.slug,
        },
      });
    }
  });

  return {
    paths: array,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = await fetchAPI(`/articles?slug=${params.slug}`);

  return {
    props: { article: article[0] },
    revalidate: 1,
  };
}

export default Post;
