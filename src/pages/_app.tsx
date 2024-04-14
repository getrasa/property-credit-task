import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider } from "../tools/cache/CacheProvider";
import { PrimeReactProvider } from "primereact/api";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>
      <CacheProvider>
        <Component {...pageProps} />;
      </CacheProvider>
    </PrimeReactProvider>
  );
}
