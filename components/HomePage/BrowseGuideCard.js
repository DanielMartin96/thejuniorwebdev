import React from "react";
import Image from "next/image";

const BrowseGuideCard = ({ guide }) => {
  return (
    <div className="w-60 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-5">
      <Image
        className="object-cover w-full h-56"
        src={guide.src}
        alt={guide.alt}
        height="426"
        width="640"
      />

      <div className="py-5 text-center">
        <a
          href={`/guide${guide.src}`}
          className="block text-2xl font-bold text-gray-800 dark:text-white"
        >
          {guide.name}
        </a>
        <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
          Browse Guides
        </button>
      </div>
    </div>
  );
};

export default BrowseGuideCard;
