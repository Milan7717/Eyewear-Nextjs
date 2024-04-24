import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen mx-10">
      <div className="grid grid-cols-2 gap-10 items-center justify-center">
        <div className="text-xl">
          <p>
            Elevate your style and vision with our exquisite collection of
            <span className="text-blue-500 mx-2">Eyewear</span>. From sleek frames that exude sophistication to vibrant
            designs that make a statement, we offer a range of options to suit
            every taste and occasion.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image className=" rounded-xl" src="/homepageimage.jpg" alt="homepageimage" width={350} height={350} />
        </div>
      </div>
    </div>
  );
};

export default page;
