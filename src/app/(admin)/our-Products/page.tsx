import Loader from "@/components/Loader";
import OurProducts from "@/components/ourProducts";
import React, { Suspense } from "react";

const OurProduct = () => {
  return (
    <div className="pb-12 pt-2">
          <Suspense fallback={<Loader />}>
        <OurProducts />
      </Suspense>
    </div>
  );
};

export default OurProduct;
