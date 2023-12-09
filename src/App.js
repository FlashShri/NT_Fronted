import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./component/Navigationbar";
import { DashBorad } from "./component/DashBorad";
import { Login } from "./component/Login";
import { Signup } from "./component/SignUp";
import { About } from "./component/About";
import { Contact } from "./component/Contact";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<DashBorad></DashBorad>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
