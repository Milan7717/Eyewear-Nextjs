import Image from "next/image";

export default function ProductList(props){
return(

<div className="flex flex-col gap-4  rounded-xl p-4 border-[1px] border-gray-500">
    <Image className="w-full h-[200px] object-cover object-center rounded" src={props.image} alt="product image" width={1000} height={50} />
    <div className="flex gap-2 items-center justify-end mx-4">
        <p> Price :</p> <h1>{props.price}</h1>
    </div>
</div>

)

}
