import Link from "next/link";

const SuccessPage = () => {
  return (
    <section className="flex items-center justify-center pb-32 pt-24 bg-gray-50 mx-w-7xl mx-auto w-[890px] sm:w-full px-9">
      <div className="max-w-3xl text-center bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-[#029FAE] mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for your payment. Your transaction was completed
          successfully, and you can now enjoy our services.
        </p>
        <Link href={"/shipment"}>
          <button className="px-6 py-3 bg-[#029FAE] text-white font-medium rounded-lg hover:bg-[#02a0aebd] transition">
            Generate Tracking Number
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;

// <div className="min-h-screen text-black bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[Inter] md:w-full w-[850px] ml-7 sm:ml-auto pb-5">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg shadow-[#C6E7FF] p-6 px-12">
//         <h1 className="text-3xl font-bold mb-6 font-[Inter] text-[#000000]">
//           Shipping Rates Calculator
//         </h1>

//         {/* Form Section */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* To Address Section */}
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Ship To Address
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={shipeToAddress.name}
//                 onChange={(e) =>
//                   setshipeToAddress({ ...shipeToAddress, name: e.target.value })
//                 }
//                 className="p-2 border border-gray-300 rounded-md"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Phone"
//                 value={shipeToAddress.phone}
//                 onChange={(e) =>
//                   setshipeToAddress({
//                     ...shipeToAddress,
//                     phone: e.target.value,
//                   })
//                 }
//                 className="p-2 border border-gray-300 rounded-md"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Address Line 1"
//                 value={shipeToAddress.addressLine1}
//                 onChange={(e) =>
//                   setshipeToAddress({
//                     ...shipeToAddress,
//                     addressLine1: e.target.value,
//                   })
//                 }
//                 className="p-2 border border-gray-300 rounded-md"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Address Line 2"
//                 value={shipeToAddress.addressLine2}
//                 onChange={(e) =>
//                   setshipeToAddress({
//                     ...shipeToAddress,
//                     addressLine2: e.target.value,
//                   })
//                 }
//                 className="p-2 border border-gray-300 rounded-md"
//               />
//               <input
//                 type="text"
//                 placeholder="City"
//                 value={shipeToAddress.cityLocality}
//                 onChange={(e) =>
//                   setshipeToAddress({
//                     ...shipeToAddress,
//                     cityLocality: e.target.value,
//                   })
//                 }
//                 className="p-2 border border-gray-300 rounded-md"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="State/Province"
//                 value={shipeToAddress.stateProvince}
//                 onChange={(e) =>
//                   setshipeToAddress({
//                     ...shipeToAddress,
//                     stateProvince: e.target.value,
//                   })
//                 }
//                 className="p-2 border border-gray-300 rounded-md"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Postal Code"
//                 value={shipeToAddress.postalCode}
//                 onChange={(e) =>
//                   setshipeToAddress({
//                     ...shipeToAddress,
//                     postalCode: e.target.value,
//                   })
//                 }
//                 className="p-2 border border-gray-300 rounded-md"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Country Code (e.g., PK)"
//                 value={shipeToAddress.countryCode}
//                 onChange={(e) =>
//                   setshipeToAddress({
//                     ...shipeToAddress,
//                     countryCode: e.target.value,
//                   })
//                 }
//                 className="p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="px-4 py-2 rounded-md disabled:bg-gray-400 w-full bg-[#029FAE] text-[#ffffff] font-medium hover:bg-[#02abaee6]"
//           >
//             {loading ? "Calculating..." : "Get Shipping Rates"}
//           </button>
//         </form>

//         {/* Display Available Rates */}
//         {rates.length > 0 && (
//           <div className="mt-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Available Shipping Rates
//             </h2>
//             <div className="gap-4 flex items-center flex-wrap">
//               {rates.map((rate) => (
//                 <div
//                   key={rate.rateId}
//                   className={`p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer ${
//                     rateId === rate.rateId
//                       ? "border-[#029FAE] bg-blue-100"
//                       : "border-gray-200 bg-gray-50"
//                   }`}
//                   onClick={() => setrateId(rate.rateId)}
//                 >
//                   <div className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="shippingRate"
//                       checked={rateId === rate.rateId}
//                       onChange={() => setrateId(rate.rateId)}
//                       className="form-radio h-4 w-4 text-[#029FAE]"
//                     />
//                     <div>
//                       <p className="text-lg font-medium text-gray-700">
//                         <strong>Carrier:</strong> {rate.carrierFriendlyName}
//                       </p>
//                       <p className="text-gray-600">
//                         <strong>Service:</strong> {rate.serviceType}
//                       </p>
//                       <p className="text-gray-800 font-semibold">
//                         <strong>Cost:</strong> {rate.shippingAmount.amount}{" "}
//                         {rate.shippingAmount.currency}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Create Label Button */}
//         {rateId && (
//           <div className="mt-8">
//             <button
//               onClick={handleCreateLabel}
//               disabled={loading}
//               className="w-full px-4 py-2  rounded-md bg-[#029FAE] text-[#ffffff] font-medium hover:bg-[#02abaee6] disabled:bg-gray-400"
//             >
//               {loading ? "Creating Label..." : "Create Label"}
//             </button>
//           </div>
//         )}
//         {labelPdf && (
//          <Link target="_blank" href={labelPdf}> <button className=" w-full mt-4 px-4 py-2 bg-[#F5813F] text-[#ffffff] font-medium rounded-md hover:bg-[#f5823fe8]">Download Label</button></Link>
//         )}
//         {trackingObj && (
//           <div className="mt-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Tracking thinks (We are using ShipEngine test api key so order will not trace)
//             </h2>
//             <p>Tracking number: {trackingObj.trackingNumber}</p>
//             <p> LabelId: {trackingObj.labelId}</p>
//             <p> CarrierCode: {trackingObj.carrierCode}</p>
//             <Link href={`/tracking/?labelId=${trackingObj.labelId}`}>
//               <button className="px-4 py-2 rounded-md my-3 bg-[#029FAE] text-[#ffffff] font-medium hover:bg-[#02abaee6] ">Track Order</button>
//             </Link>
//           </div>
//         )}
//         {errors.length > 0 && (
//           <div className="mt-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Errors</h2>
//             <div className="space-y-2">
//               {errors.map((error, index) => (
//                 <p key={index} className="text-red-500">
//                   {error}
//                 </p>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>

// "use client";

// import { useState, useEffect, Suspense } from "react";
// import axios from "axios";
// import { useSearchParams, useRouter } from "next/navigation";
// import { TrackingData } from "@/types/tracking";

// function TrackShipment() {
//   const [labelId, setLabelId] = useState(""); // State for labelId input
//   const [trackingData, setTrackingData] = useState<TrackingData | null>(null); // State for tracking data
//   const [loading, setLoading] = useState(false); // State for loading spinner
//   const [error, setError] = useState<string | null>(null); // State for error messages

//   // Get query parameters and router
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const queryLabelId = searchParams?.get("labelId") || ""; // Safely fetch labelId

//   // Automatically fetch tracking data if labelId is present in query params
//   useEffect(() => {
//     if (queryLabelId) {
//       setLabelId(queryLabelId); // Set labelId from query params
//       handleSubmit(queryLabelId); // Automatically submit the form
//     }
//   }, [queryLabelId]);

//   // Function to handle form submission
//   const handleSubmit = async (labelId: string) => {
//     if (!labelId) {
//       setError("Label ID is required.");
//       return;
//     }

//     setLoading(true); // Show loading spinner
//     setError(null); // Clear previous errors

//     try {
//       // Update the URL with the labelId query parameter
//       router.replace(`/tracking?labelId=${labelId}`);

//       // Make API request to track shipment
//       const response = await axios.get(`/api/shipengine/tracking/${labelId}`);
//       setTrackingData(response.data); // Set tracking data
//     } catch (err) {
//       console.error("Error tracking shipment:", err);
//       setError("Failed to track shipment. Please check the label ID and try again."); // Set error message
//     } finally {
//       setLoading(false); // Hide loading spinner
//     }
//   };

//   return (
//       <div className="min-h-screen bg-gray-100 py-8  text-black max-w-7xl mx-auto text-[Inter] md:w-full w-[850px] ml-7 sm:ml-auto pb-5">
//         <div className="max-w-4xl mx-auto px-4">
//           <h1 className="text-3xl font-bold text-center mb-8">Track Your Shipment</h1>

//           {/* Input Form */}
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleSubmit(labelId);
//             }}
//             className="bg-white p-6 rounded-lg shadow-md"
//           >
//             <div className="flex flex-col space-y-4">
//               <label htmlFor="labelId" className="text-lg font-medium">
//                 Enter Label ID or Tracking Number:
//               </label>
//               <input
//                 type="text"
//                 id="labelId"
//                 value={labelId}
//                 onChange={(e) => setLabelId(e.target.value)}
//                 className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
//                 placeholder="Enter label ID"
//                 required
//               />
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="  transition-colors disabled:bg-blue-300 px-4 py-2 rounded-md  w-full bg-[#029FAE] text-[#ffffff] font-medium hover:bg-[#02abaee6]"
//               >
//                 {loading ? "Tracking..." : "Track Shipment"}
//               </button>
//             </div>
//           </form>

//           {/* Error Message */}
//           {error && (
//             <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
//               {error}
//             </div>
//           )}

//           {/* Tracking Details */}
//           {trackingData && (
//             <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold mb-4">Tracking Details</h2>
//               <div className="space-y-4">
//                 <p>
//                   <span className="font-semibold">Tracking Number:</span>{" "}
//                   {trackingData.trackingNumber}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Status:</span>{" "}
//                   {trackingData.statusDescription}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Carrier Status:</span>{" "}
//                   {trackingData.carrierStatusDescription || "N/A"}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Estimated Delivery:</span>{" "}
//                   {trackingData.estimatedDeliveryDate || "N/A"}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Actual Delivery:</span>{" "}
//                   {trackingData.actualDeliveryDate || "N/A"}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//   );
// }

// export default function TrackingPage (){
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <TrackShipment />
//     </Suspense>
//   );
// }
