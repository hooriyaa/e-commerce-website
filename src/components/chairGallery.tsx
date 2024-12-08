import Image from "next/image";

export default function ChairGallery() {
  return (
    <header className="container mx-auto px-4 py-12 lg:py-16 ml-64 sm:ml-0">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
        <div className="relative lg:w-2/3 hidden md:flex items-center justify-center px-4 lg:px-0">
          {/* Rotated Vertical Text */}
          <h1 className="absolute right-16 lg:left-[10px] top-[90%] -translate-y-[50%] rotate-[-90deg] text-sm lg:text-lg font-bold uppercase tracking-widest text-gray-700 whitespace-nowrap">
            Explore New and Popular Styles
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-[48%]">
            <Image
              src="/images/product3.png"
              alt="Orange modern chair"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square">
              <Image
                src="/images/product4.png"
                alt="White tufted chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/product2.png"
                alt="Gray upholstered chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/product10.png"
                alt="Vintage white chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/product2.png"
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
