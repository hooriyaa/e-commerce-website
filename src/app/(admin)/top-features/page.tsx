import Loader from "@/components/Loader";
import TopFeatures from "@/components/topFeatures";
import React, { Suspense } from "react";

const Topfeatures = () => {
  return (
    <div className="pb-12 pt-2">
      <Suspense fallback={<Loader />}>
        <TopFeatures />
      </Suspense>
    </div>
  );
};

export default Topfeatures;
