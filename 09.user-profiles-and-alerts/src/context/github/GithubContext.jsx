import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get Search Users
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_API_URL}/search/users?${params}`, {
      headers: { 'Content-Type': 'application/json' },
    });

    const { items } = await res.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  // Clear users from state
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  // Set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, searchUsers, clearUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
