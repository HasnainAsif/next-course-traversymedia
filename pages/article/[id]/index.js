import Link from 'next/link';
import { useRouter } from 'next/router';
import Meta from '../../../components/Meta';
import { server } from '../../../config';

// SINGLE ARTICLE PAGE
const Article = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href={'/'}>Go To Home</Link>
    </>
  );
};

// // fetch data at the time of request
// export const getServerSideProps = async (context) => {
//   // context get id of whatever is available in url
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

///////////////////////////////
// // fetch data at build time
// // faster than above approach
// export const getStaticProps = async (context) => {
//   // context get id of whatever is available in url
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     // paths: { params: { id: '1', id: '2' } },
//     paths,
//     fallback: false,
//   };
// };

/////////////////////////////
// Fetching data from NEXTJS api
// fetch data at build time
// faster than 'getServerSideProps' approach
export const getStaticProps = async (context) => {
  // context get id of whatever is available in url
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    // paths: { params: { id: '1', id: '2' } },
    paths,
    fallback: false,
  };
};

export default Article;
