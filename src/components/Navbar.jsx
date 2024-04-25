import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-zinc-800 sticky text-xl ">
      <div className="mx-10">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </Link>
      </div>
      <div className="mx-10">
        <Link href="/category">Categories</Link>
      </div>
    </div>
  );
};

export default Navbar;
