import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import AuthProvider from "@/pages/auth/AuthProvider";
import PrivateRoute from "./PrivateRoute";

import AuthPage from "@/pages/auth";
import MainPage from "@/pages/mainPage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/auth" element={<AuthPage />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/" element={<MainPage />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    </React.StrictMode>,
);
