import { User } from "./UserType";
import { Admin } from "./AdminType";

export interface AuthContextType {
  user: User | null;
  admin: Admin | null;
  login: (token: string) => void;
  loginAdmin: (token: string) => void;
  logout: () => void;
}