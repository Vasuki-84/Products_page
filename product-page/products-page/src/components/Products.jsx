import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [Cart, setCart] = useState(0);
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Add to cart
  const addToCart = () => {
    setCart(Cart + 1);
  };

  // filter by product's name , category , price , rating
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      category === "All"
        ? true
        : product.category.toLowerCase() === category.toLowerCase()
    )
    .sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "rating") return b.rating.rate - a.rating.rate;
      return 0;
    });

  useEffect(() => {
    // mounting
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json()) // updates
      .then((data) => setProducts(data));
  }, []);

  // useNavigate() hook
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-8">
      {/* ProductsPage */}
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Our Products
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 items-center p-4 bg-gray-100 rounded-2xl shadow-md">
        {/* Add to cart icon */}
        <div className="relative flex justify-center items-center p-2 bg-white rounded-xl shadow hover:bg-yellow-100 transition text-3xl font-semibold">
          CART
          <ShoppingCart size={36} className="text-yellow-600" />
          <div className="absolute top-1 right-1 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
            {Cart}
          </div>
        </div>

        {/* Sort option */}
        <select
          className="border border-gray-400 focus:border-pink-600 text-sm sm:text-base px-3 py-2 rounded-xl bg-black text-white cursor-pointer w-full shadow hover:scale-105 transition"
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
        >
          <option value="">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating: High to Low</option>
        </select>

        {/* Search option */}
        <input
          type="text"
          placeholder="🔍 Search name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 focus:border-pink-600 text-sm sm:text-base px-3 py-2 rounded-xl shadow w-full hover:scale-105 transition"
        />

        {/* Category dropdown */}
        <select
          className="border border-gray-400 focus:border-pink-600 text-sm sm:text-base px-3 py-2 rounded-xl bg-black text-white cursor-pointer shadow hover:scale-105 transition"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      {/* general category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mb-3 mt-5">
        {filteredProducts.map((product) => (
          <div
             onClick={() => navigate(`/product/${product.id}`)}
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
               
                className="bg-yellow-500 px-5 py-1 cursor-pointer text-white rounded text-lg mt-4"
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
