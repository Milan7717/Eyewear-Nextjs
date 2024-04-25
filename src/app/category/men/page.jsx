import ProductList from "@/components/ProductList";

const menApi=[
  {
image:"/men1.jpg",
price:1000,

},
  {
image:"/men2.webp",
price:500,

},
  {
image:"/men3.png",
price:1500,

},
]

const Men = () => {
    return (
      <div className="min-h-screen">
      <div className="grid grid-cols-4">
        {menApi.map((data, index) => {
          return <ProductList key={index} image={data.image} price={data.price} />;
        })}
      </div>
    </div>
    )
  }
  
  export default Men
  