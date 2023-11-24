import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";
import SeatReservationPage from "./pages/SeatReservation";
import SeatYes from "./pages/SeatYes";
import NoticePage from "./pages/NoticePage";
import Exit from "./pages/SeatExit";
import AlarmPage from "./pages/AlarmPage";
import UsagePage from "./pages/UsagePage";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/entry" element={<SeatReservationPage />} />
        <Route path="/reseryes" element={<SeatYes />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/exit" element={<Exit />} />
        <Route path="/AlarmPage" element={<AlarmPage />} />
        <Route path="/usage" element={<UsagePage />} />
      </Routes>
    </Router>
  );
};

export default App;
