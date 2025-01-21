import OurProducts from "@/components/ourProducts";
import React, { Suspense } from "react";

const OurProduct = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OurProducts />
      </Suspense>
    </div>
  );
};

export default OurProduct;
