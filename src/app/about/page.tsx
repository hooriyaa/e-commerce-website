"use client";

import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen mt-4 sm:w-full  w-[700px] ml-24 sm:ml-0 font-[Inter]">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12 bg-white">
        <div className="bg-[#007580] text-white p-8 md:p-12 rounded-lg flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl text-[#FFFFFF] font-bold mb-4">About Us - Comforty</h1>
          <p className="text-base mb-6 text-[#FFFFFF]">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in
            contemporary furniture design with a focus on modern aesthetics, we craft chairs that seamlessly blend style
            with functionality.
          </p>
          <button className="text-[#FFFFFF] bg-[#2aa1acd2] px-6 py-3 rounded-md w-fit hover:bg-[#007580ec] transition-colors">
            View collection
          </button>
        </div>
        <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src="/images/product2.png"
            alt="Modern chair"
            fill
            className="object-contain object-center"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#272343]">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Image alt="services1" src={"/images/services1.png"} width={300} height={300} className="w-8 h-8 text-teal-600" />}
            title="Next day as standard"
            description="Order before 3pm and get your order the next day as standard"
          />
          <FeatureCard
            icon={<Image alt="services2" src={"/images/services3.png"} width={300} height={300} className="w-8 h-8 text-teal-600" />}
            title="Made by true artisans"
            description="Handmade crafted goods made with real passion and craftmanship"
          />
          <FeatureCard
            icon={<Image alt="services3" src={"/images/services2.png"} width={300} height={300} className="w-8 h-8 text-teal-600" />}
            title="Unbeatable prices"
            description="For our materials and quality you won't find better prices anywhere"
          />
          <FeatureCard
            icon={<Image alt="services4" src={"/images/services4.png"} width={300} height={300} className="w-8 h-8 text-teal-600" />}
            title="Recycled packaging"
            description="We use 100% recycled packaging to ensure our footprint is more manageable"
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
  <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-[#272343]">Our Popular Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Larger Image */}
    <ProductCard
      image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80"
      title="The Poplar suede sofa"
      price={99.0}
      className="md:col-span-2"
    />
    {/* Smaller Images */}
    <ProductCard
      image="/images/ProductCard1.png"
      title="The Dandy chair"
      price={99.0}
    />
    <ProductCard
      image="/images/ProductCard2.png"
      title="The Dandy chair"
      price={99.0}
    />
  </div>
</section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-[#F9F9F9] rounded-lg shadow-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-normal mb-2 text-[#007580] font-[Inter] ">{title}</h3>
      <p className="text-[#007580] text-sm font-[Inter] font-normal">{description}</p>
    </div>
  );
}

function ProductCard({ image, title, price, className }: { image: string; title: string; price: number; className?: string }) {
    return (
      <div className={`group cursor-pointer ${className || ''}`}>
        <div className="relative h-[300px] md:h-[400px] mb-4 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain w-full h-full transition-transform group-hover:scale-105"
          />
        </div>
        <h3 className="text-lg text-[#2A254B] font-normal mb-2">{title}</h3>
        <p className="text-[#2A254B] text-base">${price.toFixed(2)}</p>
      </div>
    );
  }