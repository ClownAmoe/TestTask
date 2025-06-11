"use client";
import AdminMenu from "@/components/AdminMenu/AdminMenu";
import Header from "@/components/Header/Header";
import Products from "@/components/Products/Products";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="flex flex-col">
        <Header />
        <div className="ml-4 mr-4 mt-4">
          <AdminMenu />
          <Products />
        </div>
      </div>
    </Provider>
  );
}
