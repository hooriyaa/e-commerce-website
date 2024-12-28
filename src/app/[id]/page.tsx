import ProductDetailServer from "./productDetailServer";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <ProductDetailServer params={resolvedParams} />;
}
