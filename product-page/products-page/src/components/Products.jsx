import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  {
    /* Component Life cycle methods - 1. ComponentMOUNT 2. ComponentUPDATE 3. ComponentUNMOUNT 
       useEffect - */
  }

  useEffect(() => {
    // mounting
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json()) // updates
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div className="p-4 md:p-8">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Our Products
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mb-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 shadow-md rounded p-4 flex flex-col items-center mt-2"
          >
            <img
              className="h-40 w-auto mb-4 object-contain"
              src={product.image}
              alt=""
            />
            <h4 className="text-xl font-semibold">{product.title}</h4>
            {/* <p className="text-gray-600 mt-2 text-sm">{product.description}</p> */}
            <div className="flex flex-col  items-center mt-2">
              <div className="flex flex-row gap-30  ">
                <p className="text-xl font-bold">${product.price}</p>
                <p className="text-xl text-white bg-red-500 px-2 rounded  ">
                  ⭐{product.rating.rate}
                </p>
              </div>
              <button className="bg-blue-500 px-5 py-2 cursor-pointer text-white rounded text-lg mt-4">
                Buy now
              </button>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
