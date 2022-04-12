import Head from 'next/head';
import Nav from './Nav';

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta keyword="powered by next.js"></meta>
      </Head>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
