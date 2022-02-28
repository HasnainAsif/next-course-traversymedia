import Head from 'next/head';
import Meta from '../components/Meta';

const about = () => {
  return (
    <div>
      {/* <Head>
        <title>About</title>
      </Head> */}
      {/* Adding Meta will only override our Layout Meta */}
      <Meta title={'About'} />

      <h1>About page!!!</h1>
    </div>
  );
};

export default about;
