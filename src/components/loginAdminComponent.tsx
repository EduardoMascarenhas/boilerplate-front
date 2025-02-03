import { useAuth } from '@/apollo/auth-context';
import styles from "@/styles/Home.module.css";
import { useMutation } from '@apollo/client';
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import React, { useState } from 'react';
import { SignInAdminDocument } from '../generated/graphql';
import Layout from './layout';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const LoginAdmin: React.FC = () => {
  const auth = useAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [signInAdmin, { loading }] = useMutation(SignInAdminDocument, {
    onError: (error) => {
      // Here you can check if there are GraphQL or network errors and handle them
      if (error.graphQLErrors && error.graphQLErrors.length > 0) {
        // Handle the GraphQL error
        setErrorMessage(error.graphQLErrors[0].message);
      } else if (error.networkError) {
        // Handle network errors, if any
        setErrorMessage('Network error. Please try again later.');
      } else {
        // For unexpected errors, provide a generic message
        setErrorMessage('An unknown error occurred.');
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null); // Reset error message before submitting

    try {
      const response = await signInAdmin({
        variables: { SignInAdminInput: { email, password } },
      });

      if (response.data) {
        const { token } = response.data.signInAdmin;
        if (token) {
          auth.loginAdmin(token)
        }
      }
    } catch (err) {
      // Optional: Log or handle any errors if you want more control
      console.error('Sign-in mutation error:', err);
    }
  };

  return (
    <Layout title='Boilerplate - Admin - Entrar' description='Acesso ao Dashboard Administrativo'>
      <div>
          <h2>Acesso ao Dashboard Administrativo</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          {errorMessage && (
            <div style={{ color: 'red', marginTop: '10px' }}>
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
    </Layout>

  );
};

export default LoginAdmin;
