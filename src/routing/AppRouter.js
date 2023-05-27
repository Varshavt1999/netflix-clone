import React from "react";
import { Routes, Route } from "react-router-dom";
// components
import Home from "../components/screens/Home";
import Navbar from "../components/includes/Navbar";

function AppRouter() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default AppRouter;
