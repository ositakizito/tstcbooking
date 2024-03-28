import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from "./components/booking";
import Home from "./components/home";
import Login from "./components/login";
import Pay from "./components/pay";
import SignUp from "./components/sign";
import Ticket from "./components/ticket";
import Profile from "./components/profile";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/booking" element={<Booking/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/ticket/:id" element={<Ticket/>}></Route>
          <Route path="/pay" element={<Pay/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
