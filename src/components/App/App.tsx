import React from "react";
import { Route, Routes } from "react-router";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";

const App = (): JSX.Element => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
