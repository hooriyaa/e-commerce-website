import Companylogo from "@/components/companylogo";
import Hero from "@/components/hero";
import OurProducts from "@/components/ourProducts";
import TopCategory from "@/components/topCategory";
import ChairGallery from "@/components/chairGallery";
import TopFeatures from "@/components/topFeatures";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto ">
     <Hero/>
     <Companylogo/>
     <TopFeatures/>
     <TopCategory/>
     <ChairGallery/>
     <OurProducts/>
    </div>
  );
}
