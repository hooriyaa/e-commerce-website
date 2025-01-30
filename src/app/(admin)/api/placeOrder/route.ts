import { NextRequest, NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { v4 as uuidv4 } from "uuid";

// Create a Sanity client instance
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-01-01",
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,
  useCdn: false,
});

// Function to fetch the correct product _id using productId (number)
async function getProductId(productId: number) {
  const query = `*[_type == "products" && id == $productId][0]{_id}`;
  const product = await sanityClient.fetch(query, { productId });
  return product?._id || null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, emailAddress, shippingAddress, phoneNumber, items, total } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ message: "Invalid or empty items array" }, { status: 400 });
    }

    const orderItemRefs = [];

    for (const item of items) {
      const productRef = await getProductId(item.productId);

      if (!productRef) {
        return NextResponse.json(
          { message: `Product with ID ${item.productId} does not exist.` },
          { status: 409 }
        );
      }

      // ✅ Create orderItem (no `_key` needed in document)
      const orderItemDoc = await sanityClient.create({
        _type: "orderItems",
        products: { _ref: productRef },
        price: item.price,
        quantity: item.quantity,
      });

      // ✅ Assign `_key` dynamically only in the array (allowed by Sanity)
      orderItemRefs.push({
        _key: uuidv4(), 
        _type: "reference",
        _ref: orderItemDoc._id,
      });
    }

    // ✅ Create order document with references to orderItems
    const orderDoc = {
      _type: "orders",
      fullName,
      emailAddress,
      shippingAddress,
      phoneNumber,
      items: orderItemRefs, 
      total,
      status: "pending",
    };

    await sanityClient.create(orderDoc);

    return NextResponse.json({ message: "Order created successfully." }, { status: 200 });
  } catch (error) {
    console.error("Sanity create order error:", error);
    return NextResponse.json({ message: "Failed to create order." }, { status: 500 });
  }
}
