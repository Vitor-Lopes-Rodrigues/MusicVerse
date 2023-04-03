
import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";

//Pages
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="posts/create" element={<CreatePost />} />
                <Route path={"/dashboard"} element={<Dashboard />} />
            </Routes>
        </div>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
