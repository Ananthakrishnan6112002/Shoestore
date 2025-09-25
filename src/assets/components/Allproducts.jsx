import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Allproducts = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]); // min, max price
  const [brandFilter, setBrandFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Filter products by multiple conditions
  const filteredProducts = products.filter((product) => {
    const matchesModel = product.model.toLowerCase().startsWith(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesBrand = brandFilter ? product.brand === brandFilter : true;
    const matchesCategory = categoryFilter ? product.category === categoryFilter : true;

    return matchesModel && matchesPrice && matchesBrand && matchesCategory;
  });

  const brands = [...new Set(products.map(p => p.brand))];
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div>
      <Navbar />
      <div className="h-full px-4 md:px-10 lg:px-40 mt-20">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap md:gap-2 lg:gap-4 gap-4 justify-center md:justify-start">
          <input
            type="text"
            placeholder="Search by model..."
            className="border-2 border-gray-300 rounded-xl px-4 py-2 w-full sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="border-2 border-gray-300 rounded-xl px-4 py-2 w-full sm:w-auto"
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
          >
            <option value="">All Brands</option>
            {brands.map((b, i) => (
              <option key={i} value={b}>{b}</option>
            ))}
          </select>

          <select
            className="border-2 border-gray-300 rounded-xl px-4 py-2 w-full sm:w-auto"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Min Price"
            className="border-2 border-gray-300 rounded-xl px-4 py-2 w-full md:w-12 lg:w-24 sm:w-24"
            defaultValue={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          />
          <input
            type="number"
            placeholder="Max Price"
            className="border-2 border-gray-300 rounded-xl px-4 py-2 w-full md:w-16 lg:w-24 sm:w-24"
            defaultValue={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          />
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-14 mt-10">
          {filteredProducts.length ? (
            filteredProducts.map((pict) => (
              <div key={pict.id} className="border-2 border-gray-300 pb-10 rounded-3xl">
                <img
                  src={pict.images[0]}
                  alt=""
                  className="w-full h-72 sm:h-80 lg:h-[30rem] lg:w-[37rem] md:h-[20rem] md:w-[30rem] rounded-2xl mb-3 object-cover"
                />
                <span className="font-bold text-2xl">{pict.model}</span>
                <p>{pict.sole2?.[0]?.text2}</p>
                <span className="flex mt-2 ml-4">
                  <p className="text-3xl font-bold">${pict.price}</p>
                </span>
                <div className="mt-6 text-center">
                  <Link
                    to={`/add-to-bag/${pict.id}`}
                    className="bg-lime-300 px-4 py-3 rounded-4xl"
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 mt-10">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
