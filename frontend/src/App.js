import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import { handleInitialData } from "./actions/initQuestion";
import { Logout } from "./pages/Logout/Logout";
import AuthenWrapper from "./redux/AuthenWrapper";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import NewPoll from "./pages/NewPoll/NewPoll";
import PollDetail from "./pages/Dashboard/PollDetail";
import { loginUser } from "./actions/authUserAction";
import CryptoJS from "crypto-js";
import NotFoundPage from "./pages/404/404";

export const PATH = {
  HOME_URL: "/",
  LOGIN_URL: "/login",
  LOGOUT_URL: "/logout",
  LEADERBOARD_URL: "/leaderboard",
  QUESTION_URL: "/allquestions",
  NEWQUESTION_URL: "/add",
  MORE_URL: "/*",
}

function App() {
  const isLoggin = useSelector((state) => Boolean(state.authUserReducer));

  const dispatch = useDispatch();

  useEffect(() => {
    // Check localStorage for the auth data
    const encryptedUser = localStorage.getItem('authUser');
    if (encryptedUser) {
      const decryptedUser = CryptoJS.AES.decrypt(encryptedUser, "secret_key").toString(CryptoJS.enc.Utf8);
      const parsedUser = JSON.parse(decryptedUser);
      dispatch(loginUser(parsedUser));
    }

    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div className="App">
      {isLoggin && <Header />}
      <Routes>
        <Route path={PATH.LOGIN_URL} exact element={<Login />} />
        <Route path={PATH.HOME_URL} element={<AuthenWrapper><Dashboard /></AuthenWrapper>} />
        <Route path={PATH.LEADERBOARD_URL} element={<AuthenWrapper><LeaderBoard /></AuthenWrapper>} />
        <Route path={PATH.NEWQUESTION_URL} element={<AuthenWrapper><NewPoll /></AuthenWrapper>} />
        <Route path={PATH.QUESTION_URL + `/:id`} element={<AuthenWrapper><PollDetail /></AuthenWrapper>} />
        <Route path={PATH.LOGOUT_URL} element={<Logout />} />
        <Route path={PATH.MORE_URL} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
