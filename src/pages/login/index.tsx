import { useAuth } from "@/apollo/auth-context";
import Login from "@/components/loginComponent";
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const auth = useAuth();

  if (auth.user) {
    router.push('/profile')
  } else {
    return (
      <Login />
    )
  }

}