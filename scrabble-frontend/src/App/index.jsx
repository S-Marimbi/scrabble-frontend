import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Signup from "./Pages/SignUp";
import APPCONTEXT from "./Context/AppContext.jsx";

function App() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    return (
        <APPCONTEXT.Provider value={{ user, setUser, token, setToken }}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            </BrowserRouter>
        </APPCONTEXT.Provider>
    );
}

export default App;