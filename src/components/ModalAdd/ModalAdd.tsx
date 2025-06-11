"use client";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { addProduct } from "@/actions/productAction";

type Props = {
  onClose: () => void;
};

export default function ModalAdd({ onClose }: Props) {
  const [id, setId] = useState<number | "">("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [count, setCount] = useState<number | "">("");
  const [width, setWidth] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<string>("");

  const dispatch = useDispatch();
  const handleConfirm = async () => {
    try {
      const newProduct = {
        id: Number(id),
        imageUrl,
        name,
        count: Number(count),
        size: {
          width: Number(width),
          height: Number(height),
        },
        weight,
        comments: [],
      };

      await dispatch(addProduct(newProduct) as any);

      onClose();
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  return (
    <div className="h-auto w-1/3 border-2 p-8 bg-white rounded-lg z-10 flex flex-col gap-4">
      <h1 className="text-lg font-bold text-center">Add new Product</h1>
      <Input
        propsInput={{
          type: "number",
          placeholder: "ID",
          value: id,
          onChange: (e) => {
            setId(Number(e.target.value));
          },
        }}
      />
      <Input
        propsInput={{
          type: "text",
          placeholder: "Image URL",
          value: imageUrl,
          onChange: (e) => {
            setImageUrl(e.target.value);
          },
        }}
      />
      <Input
        propsInput={{
          type: "text",
          placeholder: "Name",
          value: name,
          onChange: (e) => {
            setName(e.target.value);
          },
        }}
      />
      <Input
        propsInput={{
          type: "number",
          placeholder: "Count",
          value: count,
          onChange: (e) => {
            setCount(Number(e.target.value));
          },
        }}
      />
      <Input
        propsInput={{
          type: "number",
          placeholder: "Width",
          value: width,
          onChange: (e) => {
            setWidth(Number(e.target.value));
          },
        }}
      />
      <Input
        propsInput={{
          type: "number",
          placeholder: "Height",
          value: height,
          onChange: (e) => {
            setHeight(Number(e.target.value));
          },
        }}
      />
      <Input
        propsInput={{
          type: "text",
          placeholder: "Weight (e.g. 200g)",
          value: weight,
          onChange: (e) => {
            setWeight(e.target.value);
          },
        }}
      />
      <div className="flex justify-around items-center">
        <Button
          props={{
            type: "submit",
            click: handleConfirm,
            variation: "confirm",
          }}
        >
          Confirm
        </Button>
        <Button
          props={{
            type: "submit",
            click: onClose,
            variation: "decline",
          }}
        >
          Decline
        </Button>
      </div>
    </div>
  );
}
