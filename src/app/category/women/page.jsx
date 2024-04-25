import ProductList from "@/components/ProductList";

const womenApi=[
  {
image:"/women1.jpeg",
price:1000,

},
  {
image:"/women2.jpg",
price:1000,

},

]

const women = () => {
    return (
      <div className="min-h-screen">
      <div className="grid grid-cols-4">
        {womenApi.map((data, index) => {
          return <ProductList key={index} image={data.image} price={data.price} />;
        })}
      </div>
    </div>
    )
  }
  
  export default women
  