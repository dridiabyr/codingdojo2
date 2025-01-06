import { useContext } from "react";
import NameContext from "./NameContext";

const NavBar = () => {
  const { name } = useContext(NameContext);
  return (
    <nav
      style={{ backgroundColor: "#282c34", color: "white", padding: "1rem" }}
    >
      <h1> hi , {name} ! </h1>
    </nav>
  );
};

export default NavBar;
