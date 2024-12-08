import Image from 'next/image';

const FeaturedProducts = () => {
  const products = [
    {
      image: '/images/product2.png',
      name: 'Library Stool Chair',
      price: '$99',
    },
    {
      image: '/images/product11.png',
      name: 'Library Stool Chair',
      price: '$99',
    },
    {
      image: '/images/product7.png',
      name: 'Library Stool Chair',
      price: '$99',
    },
    {
      image: '/images/product3.png',
      name: 'Library Stool Chair',
      price: '$99',
    },
    {
      image: '/images/product5.png',
      name: 'Library Stool Chair',
      price: '$99',
    },
  ];

  return (
    <section className="py-16 bg-white px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl  font-bold font-[Inter] text-[#000000]">Featured Products</h2>
          <a href="#" className="flex items-center gap-2 hover:underline">
            View all
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
          {products.map((product, index) => (
            <div key={index} className="rounded-lg overflow-hidden flex justify-center flex-col items-center">
              <Image src={product.image} alt={product.name} width={400} height={400} className="w-full h-64 object-contain" />
              <div className="p-4 flex justify-around items-center gap-6">
                <h3 className="text-base font-normal text-[#272343]">{product.name}</h3>
                <p className="font-bold font-[Inter] text-[#000000] text-sm">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;