export type Size = {
  height: number;
  width: number;
};

export type ProductInfo = {
  id: number;
  imageUrl: string;
  name: string;
  count: number;
  size: Size;
  weight: string;
  comments: number[];
};
