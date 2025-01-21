import TopCategory from "@/components/topCategory";
import { Suspense } from "react";

const Topcategory = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center p-12">
            Loading...
          </div>
        }
      >
        <TopCategory />
      </Suspense>
    </div>
  );
};

export default Topcategory;
