import PopularCategories from "@/components/Categories/PopularCategories";
import Feature from "@/components/Home/Feature";
import HeroBanner from "@/components/Home/HeroBanner";
import PopularProducts from "@/components/Products/PopularProducts";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <PopularCategories />
      <Feature />
      <PopularProducts />
    </>
  );
}
