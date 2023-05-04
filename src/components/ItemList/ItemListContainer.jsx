import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name }= useParams ()


  useEffect(() => {
    const productosFiltrados = products.filter (prod => prod.category === name)
    const tarea = new Promise((resolve, reject) => {
      resolve(name ? productosFiltrados :products );
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [name]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
