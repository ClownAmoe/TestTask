import Image from "next/image";
import { ProductInfo } from "./type";

type Props = {
  product: ProductInfo;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-cyan-200 w-72 p-3 flex items-center gap-2 justify-center flex-col rounded-xl mt-4 cursor-pointer hover:scale-105 transition-transform">
      <div>
        <Image
          width={250}
          height={250}
          alt={product.name}
          src={product.imageUrl}
        />
      </div>
      <div>
        <h1 className="text-center text-lg ">{product.name}</h1>
        <div className="flex justify-between w-full text-gray-500 text-sm gap-4">
          <p>Count: {product.count}</p>
          <p>
            Sizes: {product.size.height}x{product.size.width}
          </p>
        </div>
      </div>
    </div>
  );
}
