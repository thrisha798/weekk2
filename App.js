// import React from "react"
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";
// import Bootstrap from "./components/Bootstrap";
// import Home from "./Pages/Home";
// import Contact from "./Pages/Contact";
// import About from "./Pages/About";
// const App =() => {
//     return(
//         <>
//         <Bootstrap/>
//         <Home/>
//         <Contact/>
//         <About/>
//         <Header/>
//         <Body/>
//         <Footer/>
       
//         </>
//     )
// }
// export default App;

import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Mark from "./Button/Mark";
import Attend from "./Button/Attend";
import CreateAccount from "./Button/CreateAccount";
import Forgot from "./Button/Forgot";


import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./Home.css";
import "./About.css";


function App(){
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route element={ <Home/>}path="/" />
        <Route element={ <About/>}path="/about" />
        <Route element={ <Contact/>}path="/contact" />
        <Route element={ <Login/>}path="/login" />
        <Route element={ <Signup/>}path="/signup" />
        <Route element={ <Mark/>}path="/mark" />
        <Route element={ <Attend/>}path="/attend" />
        <Route element={ <Forgot/>}path="/forgot" />
         <Route element={ <CreateAccount/>}path="/create-account" />
       
        

        </Routes>
        </BrowserRouter>   
        </>
    )
}
export default App;

// import React from 'react';
// import './App.css';
// import CardRow from './components/CardRow';
// function App() {
//   return (
//     <div className="App">
//       <h1>Dog Breeds</h1>
//       <CardRow />
//     </div>
//   );
// }

// export default App;
