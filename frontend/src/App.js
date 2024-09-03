import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";

export const PATH = {
  HOME_URL: "/",
  LOGIN_URL: "/login",
  LOGOUT_URL: "/logout"
}

function App() {
  const isLoggin = useSelector((state) => Boolean(state.authUser));

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(handleInitialData());

  }, [dispatch]);
  return (
    <div className="App">
      {isLoggin && <Header />}
      <Routes>
        <Route path={PATH.HOME_URL} element={<Dashboard />} />
        <Route path={PATH.LOGIN_URL} element={<Login />} />
        <Route path={PATH.LOGOUT_URL} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
