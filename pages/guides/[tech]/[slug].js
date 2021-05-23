import { fetchAPI } from "../../../lib/api";

const Post = ({ article }) => {
  return <div>{article.title}</div>;
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const article = await fetchAPI(`/articles?slug=${params.slug}`);

  return {
    props: { article: article[0] },
    revalidate: 1,
  };
}

export default Post;
