// import "./Navbar.css" si quiero usarlo como string
import { CarWidget } from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dhk4b7fdq/image/upload/v1680575392/images_jzulml-media_lib_thumb_euqulu.png"
            alt="Este es el logo de la empresa"
          />
        </Link>

        <ul style={{ display: "flex", gap: "20px", alignItems: "end" }}>
          <li>Zapatillas</li>
          <li>Indumentaria</li>
          <li>Accesorios</li>
        </ul>
        <CarWidget />
      </div>
      <Outlet />
    </div>
  );
};
