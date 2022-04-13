import Head from 'next/head';

const HeadInfo = ({title, keyword}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword}></meta>
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: 'My Blog',
  keyword: 'powered by next.js',
};

export default HeadInfo;
