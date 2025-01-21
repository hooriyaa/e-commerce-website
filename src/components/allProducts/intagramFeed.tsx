import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

type instagramPosts = {
  title: string;
  image: string;
};

export default async function InstagramFeed() {
  const data = await client.fetch(`*[_type=="products" && "instagram" in tags]{
      title,
      image,
  }`);
  return (
    <section className="pb-16 px-9">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Follow Products And Discounts On Instagram
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {data.map((post: instagramPosts, index: number) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={urlFor(post.image).url()}
              alt={post.title}
              fill
              className="object-cover rounded-lg hover:opacity-75 transition-opacity cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
