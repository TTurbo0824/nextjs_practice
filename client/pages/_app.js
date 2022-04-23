import {wrapper} from '../store/store';
import '../styles/globals.css';
import Layout from '../components/Layout';

function App({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(App);
