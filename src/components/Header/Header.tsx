import { useNavigate } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyled";

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <>
      <HeaderStyled>
        <h1 onClick={handleNavigate}>Blackboards & Notes</h1>
        <section>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </HeaderStyled>
    </>
  );
};

export default Header;
