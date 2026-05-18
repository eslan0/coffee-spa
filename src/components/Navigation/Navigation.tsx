import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/about">About</Link>
    </nav>
  );
};
