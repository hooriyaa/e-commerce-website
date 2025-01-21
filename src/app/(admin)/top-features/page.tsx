import TopFeatures from "@/components/topFeatures";
import React, { Suspense } from "react";

const Topfeatures = () => {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
        <TopFeatures />
        </Suspense>
    </div>
  );
};

export default Topfeatures;
