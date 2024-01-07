import React from "react";
import Category from "./Category";

const PopularCategories = () => {
  return (
    <div className="mx-14 mt-14">
      <h1 className="text-2xl font-semibold">Popular Categories</h1>
      <div className="grid grid-cols-5 mt-8 gap-x-7">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default PopularCategories;
