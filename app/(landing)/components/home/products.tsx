import Image from "next/image";
import { FiPlus } from "react-icons/fi";

const ProductsSection = () => {
  const products = [
    { id: 1, name: "SportsOn Hyperfast Shoes", category: "Running", price: "Rp. 329.000", imgSrc: "product-3.png" },
    { id: 2, name: "SportsOn Rockets Tennis", category: "Tennis", price: "Rp. 999.000", imgSrc: "product-2.png" },
    { id: 3, name: "SportsOn Slowlivin", category: "Running", price: "Rp. 119.000", imgSrc: "product-1.png" },
    { id: 4, name: "SportsOn HyperSoccer v2", category: "Football", price: "Rp. 458.000", imgSrc: "product-4.png" },
    { id: 5, name: "SportsOn HyperSoccer v2", category: "Football", price: "Rp. 458.000", imgSrc: "product-4.png" },
    { id: 6, name: "SportsOn Slowlivin", category: "Running", price: "Rp. 119.000", imgSrc: "product-5.png" },
    { id: 7, name: "SportsOn Hyperfast Shoes", category: "Running", price: "Rp. 329.000", imgSrc: "product-8.png" },
    { id: 8, name: "SportsOn Rockets Tennis", category: "Tennis", price: "Rp. 999.000", imgSrc: "product-7.png" },
  ];

  return (
    <section id="products-section" className="bg-white my-20 md:my-28 py-16 md:py-20 px-5 md:px-20 font-sans">
      <h2 className="text-center text-2xl md:text-3xl font-black italic tracking-wide text-[#1a1919] mb-12 uppercase">
        <span className="text-[#ff5722]">Our</span> Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="flex flex-col group cursor-pointer p-3 rounded-md bg-transparent border border-transparent transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-100/80"
          >
            <div className="relative bg-primary-light rounded-sm aspect-square w-full flex items-center justify-center p-4 mb-4 overflow-hidden">
              {product.imgSrc ? (
                <Image
                  src={`/images/products/${product.imgSrc}`} 
                  width={220} 
                  height={220} 
                  alt={product.name} 
                  className="max-h-full max-w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <span className="text-xs text-gray-400 italic">Image Space</span>
              )}

              <button className="absolute top-3 right-3 bg-[#ff5722] text-white w-6 h-6 flex items-center justify-center font-bold rounded-sm shadow-sm hover:bg-[#e04e1d] transition-colors duration-200">
                <FiPlus size={16} />
              </button>
            </div>

            <h3 className="text-[#1a1919] font-bold text-sm md:text-base tracking-tight mb-1 line-clamp-1">
              {product.name}
            </h3>

            <div className="flex justify-between items-center mt-auto">
              <span className="text-gray-400 text-xs md:text-sm">
                {product.category}
              </span>
              <span className="text-[#ff5722] font-bold text-xs md:text-sm">
                {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;