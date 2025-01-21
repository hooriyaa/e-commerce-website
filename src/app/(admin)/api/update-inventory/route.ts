import { NextResponse } from "next/server";
import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-01-01",
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,
  useCdn: false,
});

interface CartItem {
  id: number;
  quantity: number;
}

export async function POST(request: Request) {
  try {
    const { cartItems }: { cartItems: CartItem[] } = await request.json();

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json(
        { message: "Cart items are required for inventory update." },
        { status: 400 }
      );
    }

    for (const item of cartItems) {
      const { id, quantity } = item;

      // Fetch product from Sanity
      const product = await sanityClient.fetch(
        `*[_type in ["products","categories"] && id == $id][0]{_id, inventory}`,
        { id }
      );

      if (!product) {
        return NextResponse.json(
          { message: `Product with ID: ${id} not found.` },
          { status: 404 }
        );
      }

      // Update inventory in Sanity
      await sanityClient
        .patch(product._id)
        .dec({ inventory: quantity })
        .commit();
    }

    return NextResponse.json({ message: "Inventory updated successfully." });
  } catch (error) {
    console.error("Error updating inventory:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Internal Server Error", error: errorMessage },
      { status: 500 }
    );
  }
}
