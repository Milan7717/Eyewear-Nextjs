import CategoryList from "@/components/CategoryList";

const categoryApi = [
  {
    image: "/kids1.webp",
    heading: "Kids",
    link: "/category/kids"
  },
  {
    image: "/men2.webp",
    heading: "Men",
    link: "/category/men"
  },
  {
    image: "/women2.jpg",
    heading: "Women",
    link: "/category/women"
  },
];

const page = () => {
  return (
    <div className="min-h-screen">
      {categoryApi.map((data, index) => {
        return (
          <CategoryList key={index} image={data.image} heading={data.heading} link={data.link} />
        );
      })}
    </div>
  );
};

export default page;
