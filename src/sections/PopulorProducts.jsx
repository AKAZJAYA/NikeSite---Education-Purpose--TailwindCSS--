import React from "react";
import { products } from "../constants";
import PopulorProductCard from "../components/PopulorProductCard";

const PopulorProducts = () => {
  return (
    <section id="products" className="mx-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span>Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience innovation and comfort with our iconic selection, crafted
          for unmatched style and performance.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopulorProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopulorProducts;
