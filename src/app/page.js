import PopularCategories from "@/components/Categories/PopularCategories";
import Feature from "@/components/Home/Feature";
import HeroBanner from "@/components/Home/HeroBanner";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <PopularCategories />
      <Feature />
    </main>
  );
}
