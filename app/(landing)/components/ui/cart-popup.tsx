import Image from "next/image";
import priceFormatter from "@/app/(landing)/utils/price-formatter";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import Button from "./button";

const cartList = [
    { id: 1, name: "SportsOn Hyperfast Shoes", category: "Running", price: 329000, qty: 2, imgSrc: "product-3.png" },
    { id: 2, name: "SportsOn Rockets Tennis", category: "Tennis", price: 999000, qty: 3, imgSrc: "product-2.png" },
    { id: 3, name: "SportsOn Slowlivin", category: "Running", price: 119000, qty: 5, imgSrc: "product-1.png" },
];

const CartPopup = () => {
    const totalPrice = cartList.reduce((total, item) => total + item.price * item.qty, 0);

    return (
        <div className="absolute bg-white right-0 top-16 shadow-black/10 border border-gray-200 w-90">
            <div className="p-4 border-b border-gray-200 font-bold text-center">
                Shopping Cart
            </div>
            <div>
                {cartList.map((item) => (
                    <div key={item.id} className="border-b border-gray-200 p-4 flex gap-3">
                        <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                            <Image src={`/images/products/${item.imgSrc}`} alt={item.name} width={63} height={63} className="aspect-square object-contain"/>
                        </div>
                        <div className="self-center">
                            <div className="text-sm font-medium">{item.name}</div>
                            <div className="flex gap-3 font-medium text-xs">
                                <div>{item.qty}x</div>
                                <div className="text-primary">{priceFormatter(item.price)}</div>
                            </div>
                        </div>
                        <Button className="w-7 h-7 p-0! self-center ml-auto" variant="ghost" size="small">
                            <FiTrash2/>
                        </Button>
                    </div>
                ))}
                <div className="border-t border-gray-200 p-4">
                    <div className="flex justify-between font-semibold">
                        <div className="text-sm">Total</div>
                        <div className="text-primary text-xs">{priceFormatter(totalPrice)}</div>
                    </div>
                    <Button className="w-full mt-4" variant="dark" size="small">
                        Checkout Now <FiArrowRight/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartPopup