import React from "react";

const CommonProduct = (props) => {
  return (
    <div className="border relative  mt-7 flex flex-col items-center p-3 h-[290px] rounded-md">
      <img src={props.img} alt="" />
      <div className="mt-2">
        <h1 className="font-semibold">{props.title}</h1>
        <p className="text-center mt-2">{props.quantity}</p>
        <p className="text-center text-[17px] ">{props.price}</p>
      </div>
      <button className="bg-blue-500 absolute bottom-2 px-2 py-1 rounded-lg text-white">
        Add to bag
      </button>
    </div>
  );
};

export default CommonProduct;
