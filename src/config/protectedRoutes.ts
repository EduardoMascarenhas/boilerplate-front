// src/config/routes.ts

export const protectedRoutes = {
    user: ['/profile'],  // Rota que precisa de autenticação de usuário
    admin: ['/dashboard'],  // Rota que precisa de autenticação de administrador
  };
  