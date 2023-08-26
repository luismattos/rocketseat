import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });

      localStorage.setItem("@rocketMovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketMovies:token", token);
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Nao foi possivel fazer o signin.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketMovies:user");
    localStorage.removeItem("@rocketMovies:token");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketMovies:user");
    const token = localStorage.getItem("@rocketMovies:token");

    if (user && token) {
      api.defaults.common["Authorization"] = `Bearer ${token}`;

      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { useAuth, AuthProvider };
