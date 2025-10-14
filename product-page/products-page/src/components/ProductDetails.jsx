import React, {useState , useEffect } from "react";

function ProductDetails() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/3`)
      .then((res) => res.json())
      .then(data => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-20 h-screen">
      <h2 className="text-2xl">Product Detail Pages</h2>
      <div>
        <div>
          <img src={product?.image} alt="ProductsImage" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
