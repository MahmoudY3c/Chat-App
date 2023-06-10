// import { Login } from "@mui/icons-material";
import React from "react";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Main from "../Pages/Main"

const routes = [
  {
    path: '/login',
    key: 'login',
    Element: <Login />,
  },
  {
    path: '/register',
    key: 'register',
    Element: <Register />,
  },
  {
    path: '/',
    key: 'main',
    Element: <Main />,
  },
]

export default routes