import { AppProps } from 'next/app';
import '../styles/global.css'; // Adjust path as needed

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;