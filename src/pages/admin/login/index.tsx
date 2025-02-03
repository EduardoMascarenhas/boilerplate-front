import { useAuth } from '@/apollo/auth-context'
import LoginAdmin from '@/components/loginAdminComponent'
import { useRouter } from 'next/router';
 
export default function LoginPage() {
  const router = useRouter();
  const auth = useAuth();

  if (auth.admin) {
    router.push('/dashboard')
  } else {
    return (
      <LoginAdmin />
    )
  }
}