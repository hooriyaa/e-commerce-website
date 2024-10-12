import ClientsReviews from "@/components/clientsReviews";
import Companylogo from "@/components/companylogo";
import Features from "@/components/features";
import FeaturesProducts from "@/components/featuresProducts";
import Hero from "@/components/hero";
import OurProducts from "@/components/ourProducts";
import RecentlyProducts from "@/components/recentProducts";
import TopCategory from "@/components/topCategory";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Features/>
     <Companylogo/>
     <FeaturesProducts/>
     <TopCategory/>
     <OurProducts/>
     <ClientsReviews/>
    <RecentlyProducts/>
    </div>
  );
}
