// import "./Navbar.css" si quiero usarlo como string
import { CarWidget } from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
      src="https://res.cloudinary.com/dhk4b7fdq/image/upload/v1680575392/images_jzulml-media_lib_thumb_euqulu.png" 
      alt="Este es el logo de la empresa"
      />
      
      <ul style={{ display: "flex", gap: "20px", alignItems:"end" }}>
        <li>Zapatillas</li>
        <li>Indumentaria</li>
        <li>Accesorios</li>
      </ul>
      <CarWidget />
    </div>
  );
};
