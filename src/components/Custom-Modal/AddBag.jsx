import React from "react";
import { IoBagHandle } from "react-icons/io5";
const AddBag = ({ bagVisible, bagClose }) => {
  if (!bagVisible) return null;
  return (
    <div className="fixed top-24 bg-white right-5  w-[400px] h-[550px]  border-2 border-indigo-300 rounded-b-lg ">
      <div className="flex flex-col ">
        <div className="flex items-center justify-between bg-indigo-500 p-3">
          <h1 className="flex gap-x-3 items-center text-lg text-white">
            <IoBagHandle /> 2 items
          </h1>
          <button
            className=" place-self-end font-bold border-2 p-1 text-white"
            onClick={bagClose}
          >
            Close
          </button>
        </div>
        {/* end section 1  */}
        <div className=" text-black m-3">
          <div className="flex flex-col ">
            <div className="flex items-center  border-2 rounded-md ">
              <img
                className="w-3/12"
                src="https://chaldn.com/_mpimage/chaldal-premium-beef-bone-in-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131834&q=best&v=1&m=400&webp=1"
                alt=""
              />
              <div className="ps-14">
                <p>Beef</p>
                <p>1kg</p>
                <p>700 tk</p>
              </div>
              <div className="font-semibold ps-14 ">
                <div className="">
                  <p>+</p>
                  <p>1</p>
                  <p>-</p>
                </div>
              </div>
              <button className="text-red-600 font-bold text-4xl ps-10">
                X
              </button>
            </div>
          </div>
        </div>
        <div className=" text-black m-3">
          <div className="flex flex-col ">
            <div className="flex items-center  border-2 rounded-md ">
              <img
                className="w-3/12"
                src="https://chaldn.com/_mpimage/chaldal-premium-broiler-chicken-curry-cut-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130045&q=best&v=1&m=400&webp=1"
                alt=""
              />
              <div className="ps-14">
                <p>chicken</p>
                <p>1kg</p>
                <p>400 tk</p>
              </div>
              <div className="font-semibold ps-14 ">
                <div className="">
                  <p>+</p>
                  <p>2</p>
                  <p>-</p>
                </div>
              </div>
              <button className="text-red-600 font-bold text-4xl ps-10">
                X
              </button>
            </div>
          </div>
        </div>
        <div className=" text-black m-3">
          <div className="flex flex-col ">
            <div className="flex items-center  border-2 rounded-md ">
              <img
                className="w-3/12"
                src="https://chaldn.com/_mpimage/chaldal-premium-telapiya-fish-bbq-cutting-2-pcs-40-gm-700-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D133687&q=best&v=1&m=400&webp=1"
                alt=""
              />
              <div className="ps-14">
                <p>Fish </p>
                <p>1kg</p>
                <p>300 tk</p>
              </div>
              <div className="font-semibold ps-14 ">
                <div className="">
                  <p>+</p>
                  <p>4</p>
                  <p>-</p>
                </div>
              </div>
              <button className="text-red-600 font-bold text-4xl ps-10">
                X
              </button>
            </div>
          </div>
        </div>
        {/* end section 2  */}

        <div className="flex items-center justify-center mt-10">
          <button className="bg-red-400 px-7 py-3 rounded-l">
            Place Order
          </button>
          <button className="bg-green-300 px-7 py-3 rounded-r">
            Total: 2922tk
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBag;
