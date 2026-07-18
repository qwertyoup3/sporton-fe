import Image from "next/image";

const ProductsSection = () => {
  // Array data produk sesuai dengan gambar contoh
  const products = [
    { id: 1, name: "SportsOn Hyperfast Shoes", category: "Running", price: "Rp. 329.000", imgSrc: "" },
    { id: 2, name: "SportsOn Rockets Tennis", category: "Tennis", price: "Rp. 999.000", imgSrc: "" },
    { id: 3, name: "SportsOn Slowlivin", category: "Running", price: "Rp. 119.000", imgSrc: "" },
    { id: 4, name: "SportsOn HyperSoccer v2", category: "Football", price: "Rp. 458.000", imgSrc: "" },
    { id: 5, name: "SportsOn HyperSoccer v2", category: "Football", price: "Rp. 458.000", imgSrc: "" },
    { id: 6, name: "SportsOn Slowlivin", category: "Running", price: "Rp. 119.000", imgSrc: "" },
    { id: 7, name: "SportsOn Hyperfast Shoes", category: "Running", price: "Rp. 329.000", imgSrc: "" },
    { id: 8, name: "SportsOn Rockets Tennis", category: "Tennis", price: "Rp. 999.000", imgSrc: "" },
  ];

  return (
    <section className="bg-white py-14 px-5 md:px-20 font-sans">
      {/* Title Section */}
      <h2 className="text-center text-2xl md:text-3xl font-black italic tracking-wide text-[#1a1919] mb-10 uppercase">
        <span className="text-[#ff5722]">Our</span> Products
      </h2>

      {/* Grid Container (4 Kolom di Desktop, 2 Kolom di Tablet/Mobile) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col group cursor-pointer">
            
            {/* Box Gambar Produk */}
            <div className="relative bg-[#f6eeee] rounded-sm aspect-square w-full flex items-center justify-center p-4 mb-4 overflow-hidden">
              {product.imgSrc ? (
                <img 
                  src={product.imgSrc} 
                  alt={product.name} 
                  className="max-h-full max-w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                /* Placeholder jika gambar belum dimasukkan */
                <span className="text-xs text-gray-400 italic">Image Space</span>
              )}

              {/* Tombol Plus (+) Orange di Kanan Atas */}
              <button className="absolute top-3 right-3 bg-[#ff5722] text-white w-6 h-6 flex items-center justify-center font-bold rounded-sm shadow-sm hover:bg-[#e04e1d] transition-colors duration-200">
                +
              </button>
            </div>

            {/* Nama Produk */}
            <h3 className="text-[#1a1919] font-bold text-sm md:text-base tracking-tight mb-1 line-clamp-1">
              {product.name}
            </h3>

            {/* Kategori & Harga (Sejajar Kiri-Kanan) */}
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