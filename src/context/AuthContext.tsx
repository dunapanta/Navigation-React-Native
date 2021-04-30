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
  changeFavoriteIcon: (iconName: string) => void;
  logout: () => void;
  changeUsername: (username: string) => void;
}

// Crear contexto
export const AuthContext = createContext({} as AuthContextProps);

//Proveedor del estado
export const AuthProvider = ({children}: {children: any}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeUsername = (username: string) => {
    dispatch({type: 'changeUsername', payload: username});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        logout,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
