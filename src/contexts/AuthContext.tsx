import React, { useContext } from "react";
import firebase from "firebase";
import { auth } from "../firebase";

type ContextProps = {
  user: firebase.User | null;
  authenticated: boolean;
  setUser: any;
  loadingAuthState: boolean;
  logout: any;
};

const AuthContext = React.createContext<Partial<ContextProps>>({});

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: any) {
  const [user, setUser] = React.useState(null as firebase.User | null);
  const [loadingAuthState, setLoadingAuthState] = React.useState(true);

  function logout() {
    return auth.signOut();
  }

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setUser(user);
      setLoadingAuthState(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        loadingAuthState,
        logout,
      }}
    >
      {!loadingAuthState && children}
    </AuthContext.Provider>
  );
}
