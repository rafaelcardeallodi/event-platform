import { createContext, ReactNode, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

import { provider } from "../services/firebase";
import {
  useCreateSubscriberMutation,
  useGetSubscriberByEmailQuery,
} from "../graphql/generated";

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | undefined;
  loadingAuth: boolean;
  subscribeWithGithub: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const [loadingAuth, setLoadingAuth] = useState(false);

  const [createSubscriber, { data }] = useCreateSubscriberMutation();

  const subscribeWithGithub = async () => {
    setLoadingAuth(true);

    const auth = getAuth();

    const result = await signInWithPopup(auth, provider);

    if (result.user) {
      const { displayName, email } = result.user;

      if (!displayName || !email) {
        throw new Error("User has no displayName or email");
      }

      setUser({ name: displayName, email });

      createSubscriber({
        variables: {
          name: displayName,
          email,
        },
      });

      setLoadingAuth(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loadingAuth, subscribeWithGithub }}>
      {children}
    </AuthContext.Provider>
  );
}
