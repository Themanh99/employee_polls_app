import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import { handleInitialData } from "./actions/initQuestion";
import { Logout } from "./pages/Logout/Logout";
import AuthenWrapper from "./redux/AuthenWrapper";

export const PATH = {
  HOME_URL: "/",
  LOGIN_URL: "/login",
  LOGOUT_URL: "/logout",
  LEADERBOARD_URL: "/leaderboard",
  QUESTION_URL: "/allquestions/:id",
  NEWQUESTION_URL: "/addquestion",
  NOTFOUND: "/404",
  MORE_URL: "/*",
}

function App() {
  const isLoggin = useSelector((state) => Boolean(state.authUserReducer));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());

  }, [dispatch]);
  return (
    <div className="App">
      {isLoggin && <Header />}
      <Routes>
        <Route path={PATH.LOGIN_URL} exact element={<Login />} />
        <Route path={PATH.HOME_URL} element={<AuthenWrapper><Dashboard /></AuthenWrapper>} />
        <Route path={PATH.LOGOUT_URL} element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
