import React, { createContext, useState, ReactNode } from "react";
import { User } from "../types";
import { mockUser } from "../utils/mockData";

interface AuthContextProps {
  user: User | null;
  login: (role: "Doctor" | "Patient" | "Admin") => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (role: "Doctor" | "Patient" | "Admin") => {
    setUser({ ...mockUser, role }); // Mock login
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
