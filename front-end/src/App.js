
import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";

//Importando Context
import  {AuthProvider} from "./context/AuthContext";

//Pages
function App() {
  return (
    <div className="App">
      <AuthProvider>
          <BrowserRouter>
              <Navbar />
              <div className="container">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />}/>
                      <Route path="/login" element={<Login />} />
                      <Route path="/cadastro" element={<Cadastro />}/>
                  </Routes>
              </div>
              <Footer />
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
