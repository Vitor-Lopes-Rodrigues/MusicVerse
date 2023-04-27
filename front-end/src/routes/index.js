import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "../pages/register";
import Home from "../pages/home";
import Login from "../pages/login";
import About from "../pages/about";
import Post from "../pages/post";
import Profile from "../pages/profile";

const MainRoutes = () => {
    return(
        <div className="App">
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/about" element={<About />}/>
                        <Route path="/post" element={<Post />} />
                        <Route path={"/profile"} element={<Profile />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default MainRoutes