import { LayoutStyled } from "./LayoutStyled";
import { Route, Routes } from "react-router";
import Header from "../Header/Header";
import ListNotes from "../ListNotes/ListNotes";
import Login from "../Login/Login";
import Navbar from "../NavBar/Navbar";
import Register from "../Register/Register";
import FormNote from "../FormNote/FormNote";

const Layout = (): JSX.Element => {
  const username = localStorage.getItem("username");

  return (
    <>
      <Header />
      {username ? (
        <Navbar
          name={
            username?.toUpperCase().substring(0, 1)! + username?.substring(1)
          }
        />
      ) : null}

      <LayoutStyled>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<ListNotes />} />
        </Routes>
      </LayoutStyled>
    </>
  );
};

export default Layout;
