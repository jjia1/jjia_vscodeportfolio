import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Johnathan Jia's Profile."
      />
      <meta
        name="keywords"
        content="johnathan jia, data scientist, bioinformatics, deep learning"
      />
      <meta property="og:title" content="Johnathan Jia's Profile" />
      <meta
        property="og:description"
        content="Johnathan Jia's Portfolio."
      />
      <meta property="og:image" content="https://github.com/jjia1/image-hosting/blob/main/UMAP.png?raw=true" />
      <meta property="og:url" content="https://jjia1.github.io" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Johnathan Jia',
};
