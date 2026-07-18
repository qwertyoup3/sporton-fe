import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import FooterSection from "./components/layouts/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <FooterSection />
    </main>
  );
}
