import Companylogo from "@/components/companylogo";
import Hero from "@/components/hero";
import OurProducts from "@/components/ourProducts";
import TopCategory from "@/components/topCategory";
import ChairGallery from "@/components/chairGallery";
import TopFeatures from "@/components/topFeatures";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <div className="max-w-8xl mx-auto">
      <div>
        <script
          src="//code.tidio.co/vcassegljkifkerm9t1etkk8p6h9javc.js"
          async
        ></script>
      </div>
        <Suspense fallback={<Loader />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Companylogo />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <TopFeatures />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <TopCategory />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <ChairGallery />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <OurProducts />
        </Suspense>
      </div>
    </>
  );
}
