import React from "react";
import { fetchAPI } from "../../lib/api";

const ProjectHome = ({ projects }) => {
  console.log(projects);
  return <div></div>;
};

export async function getStaticProps() {
  const projects = await fetchAPI("/categories?name=Project");

  return {
    props: { projects },
    revalidate: 1,
  };
}

export default ProjectHome;
