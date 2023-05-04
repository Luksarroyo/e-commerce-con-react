// import "./Navbar.css" si quiero usarlo como string
import { CarWidget } from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/category/zapatillas">
          <img
            src="https://res.cloudinary.com/dhk4b7fdq/image/upload/v1680575392/images_jzulml-media_lib_thumb_euqulu.png"
            alt="Este es el logo de la empresa"
          />
        </Link>

        <ul style={{ display: "flex", gap: "20px", alignItems: "end" }}>
          <Link to="/category/zapatillas">Zapatillas</Link>
          <Link to="/category/indumentaria">Indumentaria</Link>
          <Link to="/category/accesorios">Accesorios</Link>
        </ul>
        <CarWidget />
      </div>
      <Outlet />
    </div>
  );
};
