import TopFeatures from "@/components/topFeatures";
import React, { Suspense } from "react";

const Topfeatures = () => {
  return (
    <div>
        <Suspense fallback={<div className="flex justify-center items-center p-12">Loading...</div>}>
        <TopFeatures />
        </Suspense>
    </div>
  );
};

export default Topfeatures;
