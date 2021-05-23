import React from "react";
import Image from "next/image";
import Link from "next/link";

const BrowseGuideCard = ({ guide }) => {
  return (
    <div className="w-64 m-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <Image
        className="object-cover w-full h-56"
        src={guide.src}
        alt={guide.alt}
        height="auto"
        width="auto"
      />

      <div className="py-5 text-center">
        <Link href={`/guides/${guide.alt}`}>
          <p className="block cursor-pointer text-2xl font-bold text-gray-800 dark:text-white">
            {guide.name}
          </p>
        </Link>
        <Link href={`/guides/${guide.alt}`}>
          <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
            Browse Guides
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BrowseGuideCard;
