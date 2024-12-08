import Image from "next/image";

const instagramPosts = [
  "/images/product6.png",
  "/images/product11.png",
  "/images/product1.png",
  "/images/product2.png",
  "/images/product3.png",
  "/images/product7.png",
];

export default function InstagramFeed() {
  return (
    <section className="pb-16 px-9">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Follow Products And Discounts On Instagram
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {instagramPosts.map((post, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={post}
              alt={`Instagram post ${index + 1}`}
              fill
              className="object-cover rounded-lg hover:opacity-75 transition-opacity cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
