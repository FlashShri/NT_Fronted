import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./component/Navigationbar";
import { DashBorad } from "./component/DashBorad";

function App() {
  
  return (

    <>
      <BrowserRouter>
      <NavigationBar></NavigationBar>
        <Routes>
          {/* <Route path="/" element={<NavigationBar></NavigationBar>}></Route> */}
          <Route path='/home' element={<DashBorad></DashBorad>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;

