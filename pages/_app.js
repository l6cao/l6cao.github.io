import "@/styles/globals.css";
import { Chakra_Petch } from 'next/font/google';

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-chakra-petch',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${chakraPetch.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
