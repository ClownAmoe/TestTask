"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ProductCard from "@/components/ProductCard/ProductCard";
import React from "react";

interface Props {
  params: { id: any };
}

export default function ProductPage({ params }: Props) {
  const id = params.id;
  const product = useSelector((state: RootState) =>
    state.products.products.find((p: any) => p.id === Number(id))
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-4">
      <ProductCard product={product} />
    </div>
  );
}
