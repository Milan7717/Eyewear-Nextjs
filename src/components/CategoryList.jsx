import Image from "next/image";
import Link from "next/link";

const CategoryList = (props) => {
  return (
    <div className="border-[1px] border-gray-500 rounded-xl p-4 flex flex-col gap-4  text-3xl ">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Image className="h-[300px] w-[100%] object-cover object-center rounded-lg"
          src={props.image}
          alt="category image"
          width={1000}
          height={50}
        />
        <h1>{props.heading}</h1>
      </div>
      <Link href={props.link}>
        <button className="text-2xl bg-blue-500 p-2 rounded-xl">See More</button>
      </Link>
    </div>
  );
};

export default CategoryList;
