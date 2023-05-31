import React from "react";
import "./App.css";
import Proect from './Components/Proect/Proect'
import Girl from "./Components/Girl/Girl"
import Duxi from "./Components/Duxi/Duxi"
import BefAf from './Components/BefAf/BefAf';
import Product from './Components/Product/Product';
import Comments from "./Components/Comments/Comments"
import End from './Components/End/End';

function App() {
  return (
    <div className="App">
      < Proect />
      <Girl />
      <Duxi />
      <BefAf />
      <Product/>
      <Comments />
      <End />
    </div>
  );
}

export default App;

