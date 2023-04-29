import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import {ItemDetailContainer} from "./components/ItemDetail/ItemDEtailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element= { <Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/itemDetail/:" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

