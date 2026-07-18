import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
    return (
        <header>
            <div className="flex justify-between items-center gap-10 container mx-auto py-7">
                <Image 
                    src="/images/logo.svg" 
                    alt="sporton logo" 
                    width={127} 
                    height={30}
                />
                <nav className="flex gap-40 font-medium">
                    <Link 
                        href="#hero-section" 
                        className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2"
                    >
                        Home
                    </Link>
                    <Link href="#categories-section">Category</Link>
                    <Link href="#products-section">Explore Products</Link> 
                </nav>
                <div className="flex gap-10 items-center">
                    <FiSearch size={24} className="cursor-pointer" />
                    <div className="relative cursor-pointer">
                        <FiShoppingBag size={24}/>
                        <div className="bg-primary rounded-full w-4 h-4 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center font-bold">
                            3
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;