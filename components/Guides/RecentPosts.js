import React from "react";

const RecentPosts = ({ category }) => {
  return (
    <div className="pb-4">
      <h1 className="underline text-3xl font-bold text-gray-800">
        {category.name}
      </h1>
    </div>
  );
};

export default RecentPosts;
