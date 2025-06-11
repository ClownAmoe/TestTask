"use client";
import { useState } from "react";
import Button from "../Button/Button";
import ModalAdd from "../ModalAdd/ModalAdd";

export default function AdminMenu() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="flex justify-between w-full h-10 relative">
      <Button
        props={{
          type: "submit",
          click: () => setIsShown(true),
          variation: "add",
        }}
      >
        Add Product
      </Button>

      {isShown && (
        <div className="fixed inset-0 bg-black/10 flex justify-center items-center z-50">
          <ModalAdd onClose={() => setIsShown(false)} />
        </div>
      )}
    </div>
  );
}
