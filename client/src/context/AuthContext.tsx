// client/src/context/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { IUser } from "../assets/assets";
import toast from "react-hot-toast";
import api from "../configs/api";

interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  login: (user: { email: string; password: string }) => Promise<void>;
  signUP: (user: { name: string; email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {},
  login: async () => {},
  signUP: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  // 🔥 THIS LINE FIXES EVERYTHING
  const hasFetchedRef = useRef(false);

  const login = async ({ email, password }: { email: string; password: string }) => {
    const { data } = await api.post("/api/auth/login", { email, password });
    setUser(data.user);
    setIsLoggedIn(true);
    toast.success(data.message);
  };

  const signUP = async ({ name, email, password }: { name: string; email: string; password: string }) => {
    const { data } = await api.post("/api/auth/register", { name, email, password });
    setUser(data.user);
    setIsLoggedIn(true);
    toast.success(data.message);
  };

  const logout = async () => {
    const { data } = await api.post("/api/auth/logout");
    setUser(null);
    setIsLoggedIn(false);
    toast.success(data.message);
  };

  const fetchUser = async () => {
    try {
      const { data } = await api.get("/api/auth/verify");
      if (data.user) {
        setUser(data.user);
        setIsLoggedIn(true);
      }
    } catch {
      setUser(null);
      setIsLoggedIn(false);
    }
  };

  /* ✅ RUN ONCE ONLY */
  useEffect(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, setUser, login, signUP, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
