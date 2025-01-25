// src/app/(admin)/api/shipengine/get-rates/route.ts
import { NextRequest } from "next/server";
import { shipengine } from "../../../../../lib/helper/shipEngine";

export async function GET() {
  return new Response(JSON.stringify({ message: "ShipEngine testing!" }));
}

export async function POST(request: NextRequest) {
  const { shipeToAddress, packages } = await request.json();
  try {
    const shipmentDetails = await shipengine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipeToAddress,
        shipFrom: {
          name: "sakeena",
          phone: "0317******",
          addressLine1: "Address 1",
          addressLine2: "Address 2",
          cityLocality: "karachi",
          stateProvince: "IL",
          postalCode: "12345",
          countryCode: "PK",
          addressResidentialIndicator: "no",
        },
        packages: packages,
      },
      rateOptions: {
        carrierIds: [
          process.env.SHIPENGINE_FIRST_COURIER || "",
          process.env.SHIPENGINE_SECOND_COURIER || "",
          process.env.SHIPENGINE_THIRD_COURIER || "",
          process.env.SHIPENGINE_FOURTH_COURIER || "",
        ].filter(Boolean), // Remove
      },
    });
    return new Response(JSON.stringify(shipmentDetails), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error Occured" }), {});
  }
}

// export async function POST(req: NextRequest) {
//   try {
//     const {
//       shipeToAddress,
//       packages,
//     }: { shipeToAddress: Address; packages: Package[] } = await req.json();

//     // Validate required fields
//     if (!shipeToAddress || !packages) {
//       return new Response(
//         JSON.stringify({
//           error: "Missing required fields: shipeToAddress and packages",
//         }),
//         { status: 400 }
//       );
//     }

//     // Define the "ship from" address (e.g., your warehouse or business address)
//     const shipFromAddress: Address = {
//       name: "sakeena",
//       phone: "+1 555-678-1234",
//       addressLine1: "1600 Pennsylvania Avenue NW",
//       addressLine2: "",
//       cityLocality: "Washington",
//       stateProvince: "DC",
//       postalCode: "20500",
//       countryCode: "US",
//       addressResidentialIndicator: "no",
//     };

//     // Debugging logs
//     console.log("Ship To Address:", JSON.stringify(shipeToAddress, null, 2));
//     console.log("Ship From Address:", JSON.stringify(shipFromAddress, null, 2));
//     console.log("Packages:", JSON.stringify(packages, null, 2));

//     // Fetch shipping rates from ShipEngine
//     const shipmentDetails = await shipengine.getRatesWithShipmentDetails({
//       shipment: {
//         shipTo: shipeToAddress,
//         shipFrom: shipFromAddress,
//         packages: packages,
//       },
//       rateOptions: {
//         carrierIds: [
//           process.env.SHIPENGINE_FIRST_COURIER || "",
//           process.env.SHIPENGINE_SECOND_COURIER || "",
//           process.env.SHIPENGINE_THIRD_COURIER || "",
//           process.env.SHIPENGINE_FOURTH_COURIER || "",
//         ].filter(Boolean), // Remove empty strings
//       },
//     });

//     // Return the response with shipment details
//     return new Response(
//       JSON.stringify({ shipeToAddress, packages, shipmentDetails }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log("Error fetching shipping rates:", error);
//     return new Response(JSON.stringify({ error: "Internal Server Error" }), {
//       status: 500,
//     });
//   }
// }
