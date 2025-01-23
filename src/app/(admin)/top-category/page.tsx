import Loader from "@/components/Loader";
import TopCategory from "@/components/topCategory";
import { Suspense } from "react";

const Topcategory = () => {
  return (
    <div className="pb-12 pt-2">
       <Suspense fallback={<Loader />}>
        <TopCategory />
      </Suspense>
    </div>
  );
};

export default Topcategory;
