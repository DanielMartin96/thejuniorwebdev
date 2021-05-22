import React from "react";
import { fetchAPI } from "../../../lib/api";
import PostCard from "../../../components/Guides/TechPage/PostCard";

const TechPage = ({ category }) => {
  console.log(category.articles);
  return (
    <div className="container mx-auto p-4">
      <div className="pb-4">
        <h1 className="underline text-3xl font-bold text-gray-800">
          {category.name}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {category.articles.map((article) => (
          <PostCard article={article} />
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
