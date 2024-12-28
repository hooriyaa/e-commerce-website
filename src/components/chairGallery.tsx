import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

type ChairsData = {
  title: string;
  image: string;
};

export default async function ChairGallery() {
  const data = await client.fetch(`*[_type=="chairGallery"]{
    title,
    image,
}`);

  return (
    <header className="container mx-auto px-4 py-12 lg:py-16 ml-20 md:ml-0 w-[700px] md:w-full">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
        <div className="relative lg:w-2/3 hidden md:flex items-center justify-center px-4 lg:px-0">
          <h1 className="absolute right-16 lg:left-[10px] top-[90%] -translate-y-[50%] rotate-[-90deg] text-sm lg:text-lg font-bold uppercase tracking-widest text-gray-700 whitespace-nowrap">
            Explore New and Popular Styles
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-[48%]">
            {data.slice(0, 1).map((chair: ChairsData, index: number) => (
              <Image
                key={index}
                src={urlFor(chair.image).url()}
                alt={chair.title}
                className="h-full w-full object-cover"
                width={500}
                height={500}
                priority
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            {data.slice(1).map((chair: ChairsData, index: number) => (
              <div className="aspect-square" key={index}>
                <Image
                  src={urlFor(chair.image).url()}
                  alt={chair.title}
                  className="h-full w-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
