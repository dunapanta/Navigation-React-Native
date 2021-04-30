import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado Inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

// Crear contexto
export const AuthContext = createContext({} as AuthContextProps);

//Proveedor del estado
export const AuthProvider = ({children}: {children: any}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({ type: 'signIn'})
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn
      }}>
      {children}
    </AuthContext.Provider>
  );
};
