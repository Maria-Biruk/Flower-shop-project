import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('user-storage');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        if (data.user) {
          setUser(data.user);
          setIsAuthenticated(true);
        }
      } catch (e) {
        console.error('Failed to parse user data');
      }
    }
  }, []);

  // Save to localStorage when user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user-storage', JSON.stringify({ user }));
    } else {
      localStorage.removeItem('user-storage');
    }
  }, [user]);

  const login = useCallback((userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  }, []);

  const register = useCallback((userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const updateProfile = useCallback((updates) => {
    setUser((currentUser) =>
      currentUser ? { ...currentUser, ...updates } : null
    );
  }, []);

  const value = useMemo(() => ({
    user,
    isAuthenticated,
    login,
    register,
    logout,
    updateProfile
  }), [user, isAuthenticated, login, register, logout, updateProfile]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserStore() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserStore must be used within a UserProvider');
  }
  return context;
}
