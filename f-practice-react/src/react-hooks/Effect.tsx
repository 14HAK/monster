/* eslint-disable @typescript-eslint/no-explicit-any */
// api link, product: "https://dummyjson.com/products"
import React, { useEffect, useState } from "react";

const Effect = (): React.ReactElement => {
  const [products, setProducts] = useState<any[]>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await fetch("https://dummyjson.com/products");
        const data = await result.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.log(`Error: [${error}]`);
      }
    };
    fetchProduct();
  }, []);

  return (
    <>
      <div className="mx-10 my-4">
        <h1 className="text-6xl">useEffect Handle Fetch Data</h1>
        <p className="text-2xl">Product Brands</p>
        <ul>
          {products?.map((product, index) => (
            <li key={index}>
              <span className="text-teal-700">{product?.brand}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Effect;
