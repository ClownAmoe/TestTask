import { ReactNode } from "react";

export type ButtonInfo = {
  type?: "reset" | "submit";
  click: () => void;
  variation: "add" | "delete" | "confirm" | "decline";
};
