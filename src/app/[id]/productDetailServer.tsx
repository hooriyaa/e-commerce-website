import { client } from "@/sanity/lib/client";
import ProductDetail from "./productDetailClient";

export default async function ProductDetailServer({
  params,
}: {
  params: { id: string };
}) {
  const data = await client.fetch(
    `*[_type == "Products" && id == ${params.id}][0]{
      id,
      name,
      price,
      oldPrice,
      tag,
      description,
      image
    }`
  );

  return <ProductDetail data={data} />;
}
