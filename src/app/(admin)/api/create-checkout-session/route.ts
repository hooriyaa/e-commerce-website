// import Stripe from "stripe";

// if (!process.env.STRIPE_SECRET_KEY) {
//   throw new Error("Stripe secret key is not defined");
// }
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// interface LineItem {
//   price: number;
// }

// interface RequestBody {
//   totalPrice?: number;
//   items?: LineItem[];
// }

// export async function POST(request: Request): Promise<Response> {
//   try {
//     const body: RequestBody = await request.json();

//     if (!body.items && !body.totalPrice) {
//       return new Response(
//         JSON.stringify({
//           error: "Invalid request: Provide items or totalPrice",
//         }),
//         { status: 400 }
//       );
//     }

//     let lineItems;
//     if (body.items) {
//       lineItems = body.items.map((item) => ({
//         price_data: {
//           currency: "usd",
//           product_data: {
//             name: "Product", // Default product name
//           },
//           unit_amount: Math.round(item.price * 100),
//         },
//         quantity: 1,
//       }));
//     } else if (body.totalPrice) {
//       lineItems = [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: "Order Summary",
//             },
//             unit_amount: Math.round(body.totalPrice * 100),
//           },
//           quantity: 1,
//         },
//       ];
//     }

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
//       // success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
//     });

//     return new Response(JSON.stringify({ id: session.id, url: session.url }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Stripe session error:", error);
//     return new Response(JSON.stringify({ error: "Internal Server Error" }), {
//       status: 500,
//     });
//   }
// }


import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Stripe secret key is not defined");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-12-18.acacia",
});

interface LineItem {
  id: number;
  price: number;
  quantity: number;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const { cartItems }: { cartItems: LineItem[] } = await request.json();

    if (!cartItems || cartItems.length === 0) {
      return new Response(
        JSON.stringify({
          error: "Invalid request: cartItems are required.",
        }),
        { status: 400 }
      );
    }

    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: `Product ${item.id}`, // Customize product names
        },
        unit_amount: Math.round(item.price * 100), // Stripe expects prices in cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });

    return new Response(JSON.stringify({ id: session.id, url: session.url }), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Stripe session error:", error.message);
      return new Response(
        JSON.stringify({ error: "Failed to create checkout session." }),
        { status: 500 }
      );
    } else {
      console.error("An unexpected error occurred:", error);
      return new Response(
        JSON.stringify({ error: "An unexpected error occurred." }),
        { status: 500 }
      );
    }}
}

