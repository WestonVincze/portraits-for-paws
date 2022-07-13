import '../css/style.css';
import Layout from '../components/Layout';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}