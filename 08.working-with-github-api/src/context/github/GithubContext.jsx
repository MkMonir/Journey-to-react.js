import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loggedIn: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    const res = await fetch(`${GITHUB_API_URL}/users`, {
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };

  return (
    <GithubContext.Provider value={{ users: state.users, loading: state.loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
