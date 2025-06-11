"use client";
import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "@/actions/productAction";
import { RootState } from "@/store";
import { ProductInfo } from "../ProductCard/type";
import Link from "next/link";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.products.products || []
  );

  useEffect(() => {
    dispatch(listProducts() as any);
  }, [dispatch]);

  return (
    <div className="flex flex-wrap gap-3">
      {products.map((product: ProductInfo) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}
