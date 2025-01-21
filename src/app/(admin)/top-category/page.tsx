import TopCategory from "@/components/topCategory";
import { Suspense } from "react";

const Topcategory = () => {
  return (
    <div>
       <Suspense fallback={<div>Loading...</div>}>
       <TopCategory />
       </Suspense> 
    </div>
  );
};

export default Topcategory;
