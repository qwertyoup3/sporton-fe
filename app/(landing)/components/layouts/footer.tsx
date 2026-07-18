import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-[#1a1919] text-white font-sans px-5 py-10 md:px-20 md:py-14 box-border">
      
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0 pb-10">
        
        <div className="max-w-[400px]">
          <div className="mb-5">
           <Image 
                src="/images/logo-white.png" 
                alt="sporton logo" 
                width={127} 
                height={30}
            />
          </div>
          <p className="text-[#b3b3b3] text-sm leading-relaxed m-0">
            Engineered for endurance and designed for speed.<br />
            Experience gear that moves as fast as you do.
          </p>
        </div>

        <div className="flex gap-16 md:gap-32">
          
          <div className="flex flex-col gap-5 min-w-[120px]">
            <a href="#" className="text-white no-underline text-[15px] hover:text-[#ff5722] transition-colors duration-200">Home</a>
            <a href="#" className="text-white no-underline text-[15px] hover:text-[#ff5722] transition-colors duration-200">Categories</a>
            <a href="#" className="text-white no-underline text-[15px] hover:text-[#ff5722] transition-colors duration-200">Explore Products</a>
            <a href="#" className="text-white no-underline text-[15px] hover:text-[#ff5722] transition-colors duration-200">About Us</a>
          </div>

          <div className="flex flex-col gap-5 min-w-[140px]">
            <a href="#" className="text-white no-underline text-[15px] hover:text-[#ff5722] transition-colors duration-200">Instagram</a>
            <a href="#" className="text-white no-underline text-[15px] hover:text-[#ff5722] transition-colors duration-200">Facebook</a>
            <a href="#" className="text-white no-underline text-[15px] hover:text-[#ff5722] transition-colors duration-200">TikTok</a>
            <a href="#" className="text-white no-underline text-[15px] hover:text-[#ff5722] transition-colors duration-200">YouTube</a>
          </div>

        </div>
      </div>

      <div className="border-t border-[#2d2c2c] pt-7 flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-5 md:gap-0">
        <div className="text-[#b3b3b3] text-sm">
          SportsOn &copy; 2025 All Rights Reserverd.
        </div>
        
        <div className="flex gap-16 md:gap-32">
          <div className="min-w-[120px]">
            <a href="#" className="text-white no-underline text-sm hover:text-[#ff5722] transition-colors duration-200">Privacy Policy</a>
          </div>
          <div className="min-w-[140px]">
            <a href="#" className="text-white no-underline text-sm hover:text-[#ff5722] transition-colors duration-200">Terms Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;