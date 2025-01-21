import Companylogo from "@/components/companylogo";
import Hero from "@/components/hero";
import OurProducts from "@/components/ourProducts";
import TopCategory from "@/components/topCategory";
import ChairGallery from "@/components/chairGallery";
import TopFeatures from "@/components/topFeatures";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="max-w-8xl mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Companylogo />
        <TopFeatures />
        <TopCategory />
        <ChairGallery />
        <OurProducts />
      </Suspense>
    </div>
  );
}
