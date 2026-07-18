import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
    { name: "Running", imgURL: "category-running.png" },
    { name: "Tennis", imgURL: "category-tennis.png" },
    { name: "Basketball", imgURL: "category-basketball.png" },
    { name: "Football", imgURL: "category-football.png" },
    { name: "Badminton", imgURL: "category-badminton.png" },
    { name: "Swimming", imgURL: "category-swimming.png" },
];

const CategoriesSection = () => {
  return (
    <section id="categories-section" className="container mx-auto pb-20">
        <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl">Browse by Categories</h2>
            <Link href="/#" className="flex gap-2 text-primary font-medium items-center hover:underline">
                <span>See All Categories</span>
                <FiArrowRight />
            </Link>
        </div>
        
        <div className="grid grid-cols-6 gap-8 mt-8">
            {categoryList.map((category, index) => (
                
                <div 
                    className="rounded-xl bg-gradient-to-br from-[#F5F5F5] to-[#F9F9F9] w-full aspect-square flex flex-col items-center justify-center p-4 shadow-sm hover:scale-105 transition-transform duration-200 cursor-pointer" 
                    key={index}
                >
                
                    <Image 
                        src={`/images/categories/${category.imgURL}`} 
                        width={86} 
                        height={86} 
                        alt={category.name} 
                        className="mb-4 mx-auto object-contain"
                    />
                    
                    <div className="text-primary font-medium text-lg text-center">
                        {category.name}
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default CategoriesSection;