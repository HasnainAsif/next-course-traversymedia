import Head from 'next/head'; // for custom titles, metatags or may be keywords
import ArticleList from '../components/ArticleList';
import Meta from '../components/Meta';
import { server } from '../config';

export default function Home({ articles }) {
  return (
    <div>
      {/* <Head>
        <title>Webdev Newzzz</title>
        <meta name='keywords' content='web development, programming' />
      </Head>  */}

      <h1>Welcom to Nextjs!!!</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

// // fetch data at build time
// export const getStaticProps = async (context) => {
//   // context get id of whatever is available in url
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/posts?_limit=6'
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

// Fetching data from NEXTJS api
// fetch data at build time
export const getStaticProps = async (context) => {
  // context get id of whatever is available in url
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
