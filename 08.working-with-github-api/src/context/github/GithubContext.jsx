import { createContext, useState } from 'react';

const GithubContext = createContext();

const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const res = await fetch(`${GITHUB_API_URL}/users`, {
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
