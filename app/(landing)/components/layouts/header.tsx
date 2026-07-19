"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";

const Header = () => {
    const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
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
                <div className="relative flex gap-18">
                    <FiSearch size={24} className="cursor-pointer" />
                    <div className="relative cursor-pointer" onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}>
                        <FiShoppingBag size={24}/>
                        <button className="bg-primary rounded-full w-4 h-4 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center font-bold">
                            3
                        </button>
                    </div>
                    {isCartPopupOpen && <CartPopup/>}
                </div>
            </div>
        </header>
    );
};

export default Header;