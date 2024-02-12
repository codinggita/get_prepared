import { useState } from "react";
import Header from "./pages/Header";

// import Why_donate from "./pages/Why_donate";
// import Refer from "./pages/Refer";
// import Register from "./pages/Register";
import "./App.css";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = { <Header/>}></Route>
        {/* <Route path="/why" element = { <Why_donate/>}></Route> */}
        {/* <Route path="/refer" element = { <Refer/>}></Route> */}
        {/* <Route path="/register" element = { <Register/>}></Route> */}
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
