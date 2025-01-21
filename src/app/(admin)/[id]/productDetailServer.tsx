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
