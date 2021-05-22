import React from "react";
import { fetchAPI } from "../../lib/api";
import RecentPosts from "../../components/Guides/RecentPosts";

const GuideHome = ({ categories }) => {
  return (
    <div className="container mx-auto p-4 flex flex-wrap flex-col">
      {categories.slice(0, 3).map((category) => (
        <RecentPosts category={category} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const categories = await fetchAPI("/categories");

  return {
    props: { categories },
    revalidate: 1,
  };
}

export default GuideHome;
