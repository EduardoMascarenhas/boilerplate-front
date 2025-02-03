import { useAuth } from '@/apollo/auth-context';
import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { SignInDocument } from '../generated/graphql';
import Layout from './layout';

const Login: React.FC = () => {
  const auth = useAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [signIn, { loading }] = useMutation(SignInDocument, {
    onError: (error) => {
      // Here you can check if there are GraphQL or network errors and handle them
      if (error.graphQLErrors && error.graphQLErrors.length > 0) {
        // Handle the GraphQL error
        setErrorMessage(error.graphQLErrors[0].message);
      } else if (error.networkError) {
        // Handle network errors, if any
        setErrorMessage('Erro de rede. Tente novamente mais tarde.');
      } else {
        // For unexpected errors, provide a generic message
        setErrorMessage('Ocorreu um erro desconhecido.');
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null); // Reset error message before submitting

    try {
      const response = await signIn({
        variables: { SignInInput: { email, password } },
      });

      if (response.data) {
        const { token } = response.data.signIn;
        if (token) {
          auth.login(token)
        }
      }
    } catch (err) {
      // Optional: Log or handle any errors if you want more control
      console.error('Erro na mutation de Login:', err);
    }
  };

  return (
    <Layout title='Boilerplate - Entrar' description='Acesso ao Perfil do Usuário'>
      <div>
          <h2>Entrar</h2>
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

export default Login;