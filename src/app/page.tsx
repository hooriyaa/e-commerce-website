import Companylogo from "@/components/companylogo";
import Hero from "@/components/hero";
import OurProducts from "@/components/ourProducts";
import RecentlyProducts from "@/components/recentProducts";
import TopCategory from "@/components/topCategory";
import ChairGallery from "@/components/chairGallery";
import TopFeatures from "@/components/topFeatures";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Companylogo/>
     <TopFeatures/>
     <TopCategory/>
     <ChairGallery/>
     <OurProducts/>
    <RecentlyProducts/>
    </div>
  );
}
