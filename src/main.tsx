import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from "./pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppRoutes from "./routes/routes";
import AuthGoogleProvider from "./contextes/authGoogle";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>]
        <AuthGoogleProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AuthGoogleProvider>
    </React.StrictMode>
)
