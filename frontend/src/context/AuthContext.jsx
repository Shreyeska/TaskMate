// src/contexts/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import api from "../network/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Automatically check if user is logged in when app starts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setUser(res.data.user);
        setIsAuthenticated(true);
      } catch (err) {
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Login function
  const login = async (username, password) => {
    const res = await api.post(
      "/auth/login",
      { username, password },
      { withCredentials: true }
    );
    const userRes = await api.get("/auth/verify", { withCredentials: true });
    setUser(userRes.data.user);
    setIsAuthenticated(true);
  };

  // Logout function
  const logout = async () => {
    await api.post("/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
