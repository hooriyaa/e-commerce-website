import { client } from "@/sanity/lib/client";
import ProductDetail from "./productDetailClient";

export default async function ProductDetailServer({
  params,
}: {
  params: { id: string };
}) {
  const data = await client.fetch(
    `*[_type in ["products","categories"] && id == ${params.id}][0]{
      id,
      title,
      price,
      priceWithoutDiscount,
      badge,
      description,
      image,
      inventory
    }`
  );

  return <ProductDetail data={data} />;
}

// components/ProductDetailServer.tsx
// import { client } from "@/sanity/lib/client";
// import ProductDetail from "./productDetailClient";
// import ProductNotFoundPage from "@/components/product-not-found";

// export default async function ProductDetailServer({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const data = await client.fetch(
//    `*[_type == "products" && id == ${params.id}][0]{
//       id,
//       title,
//       price,
//       priceWithoutDiscount,
//       badge,
//       description,
//       image,
//       inventory,
//      "reviews": *[_type == "review" && references(^._id)]{
//       id,
//       user,
//       rating,
//       comment,
//       date
//       }
//     }`,
//     { id: params.id } // Pass the id as a parameter
//   );

//   if (!data) {
//     return <ProductNotFoundPage />; // Handle case where data is null
//   }

//   return <ProductDetail data={data} />;
// }
