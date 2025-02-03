import "@/styles/globals.css";
import { ThemeProvider } from '@/context/themeContext';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from "next/app";
import client from '../apollo/apollo-client';
import { AuthProvider } from '../apollo/auth-context';

export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
    <AuthProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  </ApolloProvider>;
}

