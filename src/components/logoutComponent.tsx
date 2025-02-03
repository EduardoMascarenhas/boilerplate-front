import { Button } from '@mui/material';
import { useAuth } from '../apollo/auth-context';

const Logout = () => {
  const auth = useAuth();

  return <Button onClick={() => auth.logout()}>Sair</Button>;
};

export default Logout;
