import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import { useContext } from "react";
import { UserDataContext } from "./context/userContext";
import Start from "./pages/Start";
import UserWrapper from "./components/UserWrapper";
import CaptainHome from "./pages/CaptainHome";
import CaptainWrapper from "./components/CaptainWrapper";
import Riding from "./pages/Riding";

function App() {
  const name = useContext(UserDataContext);
  console.log(name);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/home"
          element={
            <UserWrapper>
              <Home />
            </UserWrapper>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Riding" element={<Riding />} />

        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-home" element={<CaptainWrapper><CaptainHome /> </CaptainWrapper>}/>

      </Routes>
    </div>
  );
}

export default App;
