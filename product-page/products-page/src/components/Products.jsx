import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

function Products() {
  const [products, setProducts] = useState([]);
  const [Cart, setCart] = useState(0);
  const [category, setCategory] = useState("All");

  // Add to cart
  const addToCart = () => {
    setCart(Cart + 1);
  };

  // filter by product's name , category , price , rating
  const filteredProducts = products.filter((product) =>
    category === "All"
      ? true
      : product.category.toLowerCase() === category.toLowerCase()
  );

  useEffect(() => {
    // mounting
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json()) // updates
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-4 md:p-8">
      {/* ProductsPage */}
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Our Products
      </h3>
      {/* add to cart icon */}
      <div className="relative ... flex justify-end p-2">
        <p>
          <ShoppingCart size={40} />
        </p>
        <div className="absolute bottom-8 right-0 ...">
          <h2 className="bg-yellow-300 px-2 py-1  rounded-full">{Cart}</h2>
        </div>
      </div>

      {/* Category button */}
      <div className="p-3">
        <select
          className="border p-1 rounded-full bg-blue-200 px-4"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </div>

      {/* Product List */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {filterProducts.map((product) => (
          <div key={product.id} className="border p-3 rounded shadow">
            <img src={product.image} alt={product.title} className="h-32 mx-auto object-contain" />
            <h3 className="text-sm font-semibold mt-2 line-clamp-1">{product.title}</h3>
            <p className="text-lg font-bold">${product.price}</p>
          </div>
        ))}
      </div> */}

      {/* general category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mb-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 shadow-md rounded p-4 flex flex-col items-center mt-2"
          >
            <img
              className="h-40 w-auto mb-4 object-contain"
              src={product.image}
              alt=""
            />
            <h2 className="text-lg italic ... text-gray-500 ">
              {product.category}
            </h2>
            <h4 className="text-lg font-semibold line-clamp-1">
              {product.title}
            </h4>

            <div className="flex flex-col  items-center mt-auto">
              <div className="flex flex-row gap-30  ">
                <p className="text-xl font-bold">${product.price}</p>
                <p className=" text-white bg-red-500 px-2 rounded  ">
                  ⭐{product.rating.rate}
                </p>
              </div>
              <button
                onClick={addToCart}
                className="bg-blue-500 px-5 py-1 cursor-pointer text-white rounded text-lg mt-4"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;
