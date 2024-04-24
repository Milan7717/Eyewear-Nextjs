import Image from "next/image"
import Link from "next/link"


const CategoryList = (props) => {
  return (
    <div>
        <div>
      <Image src={props.image} alt="category image" width={100} height={100} />
      <h1>{props.heading}</h1>
      </div>
      <Link href={props.link}>
      <button>See More</button>
      </Link>
    </div>
  )
}

export default CategoryList
