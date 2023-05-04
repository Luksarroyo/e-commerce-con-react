import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import {ItemDetailContainer} from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element= { <Navbar />}>
          <Route path="/zapatillas" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

