import ProductList from "@/components/ProductList";

const kidApi = [
  {
    image: "/kids2.jpeg",
    price: 1000,
  },
  {
    image: "/kids1.webp",
    price: 2000,
  },
  {
    image: "/kids3.jpeg",
    price: 3000,
  },
];

const kids = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-4">
        {kidApi.map((data, index) => {
          return <ProductList key={index} image={data.image} price={data.price} />;
        })}
      </div>
    </div>
  );
};

export default kids;
