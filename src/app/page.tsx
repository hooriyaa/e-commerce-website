import Companylogo from "@/components/companylogo";
import Hero from "@/components/hero";
import OurProducts from "@/components/ourProducts";
import RecentlyProducts from "@/components/recentProducts";
import TopCategory from "@/components/topCategory";
import FeaturesProducts from "./FeaturesProducts/page";
import ChairGallery from "@/components/chairGallery";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Companylogo/>
     <FeaturesProducts/>
     <TopCategory/>
     <ChairGallery/>
     <OurProducts/>
    <RecentlyProducts/>
    </div>
  );
}
