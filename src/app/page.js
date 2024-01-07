import PopularCategories from "@/components/Categories/PopularCategories";
import Feature from "@/components/Home/Feature";
import HeroBanner from "@/components/Home/HeroBanner";
import PopularProducts from "@/components/Products/PopularProducts";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <PopularCategories />
      <Feature />
      <PopularProducts />
      <p className="text-3xl mt-10">
        lorem imsum dslals;lsdllslfs lsad ldslsdlflsdal l sldlsdf
      </p>
    </main>
  );
}
