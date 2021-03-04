import React from "react"
import { Redirect, Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { Home } from "../Home"
// import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("kandy_customer")) {
            return (
              <>
                <Home />
                <NavBar />
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Home />
        <Login />
      </Route>
      <Route path="/register">
        <Home />
        <Register />
      </Route>
    </>
  );