import {AuthState} from './AuthContext';

type AuthAction =
  | {
      type: 'signIn';
    }
  | {
      type: 'changeFavIcon';
      payload: string;
    }
  | {
      type: 'logout';
    };

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };

    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    case 'logout':
      return {
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };

    default:
      return state;
  }
};
