import OurProducts from "@/components/ourProducts";
import React, { Suspense } from "react";

const OurProduct = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center p-12">
            Loading...
          </div>
        }
      >
        <OurProducts />
      </Suspense>
    </div>
  );
};

export default OurProduct;
