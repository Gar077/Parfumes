import React from "react";
import styles from "./Product.module.css";
import { useState } from "react";
import duxi1 from "./duxi1.png";
import duxi2 from "./duxi2.png";
import duxi3 from "./duxi3.png";
import duxi4 from "./duxi4.png";
import duxi5 from "./duxi5.png";
import duxi6 from "./duxi6.png";

const array = [
  { name: "Skin Care", price: "35$", category: "Skin Care", img: duxi1 },
  { name: "Conditioner", price: "20$", category: "Conditioner", img: duxi2 },
  { name: "Foundation", price: "30$", category: "Foundation", img: duxi3 },
  { name: "Skin Care", price: "30$", category: "Skin Care", img: duxi4 },
  { name: "Conditioner", price: "30$", category: "Conditioner", img: duxi5 },
  { name: "Foundation", price: "30$", category: "Foundation", img: duxi6 },
  { name: "Skin Care", price: "30$", category: "Skin Care", img: duxi1 },
  { name: "Conditioner", price: "30$", category: "Conditioner", img: duxi2 },
  { name: "Foundation", price: "30$", category: "Foundation", img: duxi3 },
  { name: "Foundation", price: "30$", category: "Foundation", img: duxi5 },
];

const Product = () => {
  const [menuProduct, setMenuProduct] = useState(array);

  return (
    <div className={styles.divBig}>
      <div className={styles.div1Big}>
        <p onClick={() => setMenuProduct(array)}>All</p>
        <p
          onClick={() =>
            setMenuProduct(array.filter((e) => e.category === "Skin Care"))
          }
        >
          Skin Care
        </p>
        <p
          onClick={() =>
            setMenuProduct(array.filter((e) => e.category === "Conditioner"))
          }
        >
          Conditioner
        </p>
        <p
          onClick={() =>
            setMenuProduct(array.filter((e) => e.category === "Foundation"))
          }
        >
          Foundation
        </p>
      </div>
      <div className={styles.div2}>
        {menuProduct.map((e, i) => {
          return (
            <div key={i} className={styles.div1}>
              <div className={styles.smalldiv}>
                <h1>{e.name}</h1>
                <h2>{e.price}</h2>
                <button>Shop now</button>
              </div>
              <img className={styles.div1small1} src={e.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
