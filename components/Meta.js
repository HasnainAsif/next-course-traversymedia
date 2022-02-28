import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <>
      <Head>
        {/* Commenting below because it is by default added by NEXTJS */}
        {/* <meta charset='UTF-8' /> */}
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />

        <link rel='icon' href='/favicon.ico' />

        <title>{title}</title>
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: 'WebDev News',
  keywords: 'web development, programming',
  description: 'Get the latest news in web dev',
};

export default Meta;
