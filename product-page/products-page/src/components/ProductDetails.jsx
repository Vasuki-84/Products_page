import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const {id}  = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-15 h-screen">
      <h2 className="mb-10 font-semibold text-center  text-2xl md:text-3xl  text-center mb-6">Product Detail Pages</h2>

      <div className="flex justify-center items-center gap-15 p-8">
        <div className="w-[300px] h-[300px]">
          <img src={product?.image} alt="ProductsImage" />
        </div>

        <div className="flex flex-col space-y-6">
          <h1 className="font-bold text-xl ">{product?.title}</h1>
          <div className="flex justify-between text-xl font-bold text-red-500">
            <p>${product?.price}</p>
            <p>{product?.rating?.rate}🌟</p>
          </div>
          <p className="w-[500px] text-gray-600">{product?.description}</p>
          <p className="font-md text-sm text-gray-500">
            Total Number of purchasing : {product?.rating?.count}
          </p>

          <p
            className=" w-[150px] text-center rounded-lg
            px-2 py-1 text-black font-bold bg-gray-300"
          >
            {product?.category}
          </p>

          <button className="bg-yellow-500 px-5 py-1 cursor-pointer text-white rounded text-lg mt-4">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
