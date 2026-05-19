import { Navigation } from "@/components/Navigation/Navigation";
import "@/components/Header/Header.css";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Logotipo</h1>
      <Navigation />
    </header>
  );
};
