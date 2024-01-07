import React from "react";
import CommonProduct from "../Product-Card/CommonProduct";

const PopularProducts = () => {
  return (
    <div className="mx-14 mt-9">
      <h1 className="text-2xl font-semibold">Popular Products</h1>
      <div className="grid grid-cols-6 gap-x-4">
        <CommonProduct
          img="https://i.ibb.co/3cBsRxb/egg.png"
          title="Chicken egg"
          quantity="12 pcs"
          price="120 taka"
        />
        <CommonProduct
          img="https://i.ibb.co/sjxPDNj/beef.png"
          title="Premium Beef"
          quantity="1 kg"
          price="820 taka"
        />
        <CommonProduct
          img="https://img.freepik.com/free-photo/fresh-fish-white_144627-24518.jpg?w=740&t=st=1704603961~exp=1704604561~hmac=64ad15020d4e5d8447d5285ebb5c4644d59e406189e8416cb509f728007a79dd"
          title="See fish"
          quantity="1 kg"
          price="520 taka"
        />
        <CommonProduct
          img="https://img.freepik.com/free-photo/raw-spaghetti-nests-fresh-vegetables-bottle-oil-white_114579-31358.jpg?w=740&t=st=1704604021~exp=1704604621~hmac=c8cf7a4fa92bd6abcf7cb0c06815059963fba3c3d69a060d753ca65f0d51b407"
          title="Mastered Oil"
          quantity="1 kg"
          price="910 taka"
        />
        <CommonProduct
          img="https://img.freepik.com/premium-photo/ripe-bright-orange_159938-1295.jpg?w=740"
          title="Fresh Orange"
          quantity="1 kg"
          price="210 taka"
        />
        <CommonProduct
          img="https://img.freepik.com/premium-photo/glass-cup-black-tea-saucer-with-dry-leaves-green-tea-white-isolated-background_393202-10169.jpg?w=740"
          title="Fresh Tea"
          quantity="1 kg"
          price="700 taka"
        />
        <CommonProduct
          img="https://img.freepik.com/premium-photo/glass-cup-black-tea-saucer-with-dry-leaves-green-tea-white-isolated-background_393202-10169.jpg?w=740"
          title="Fresh Tea"
          quantity="1 kg"
          price="700 taka"
        />
        <CommonProduct
          img="https://i.ibb.co/3cBsRxb/egg.png"
          title="Chicken egg"
          quantity="12 pcs"
          price="120 taka"
        />
        <CommonProduct
          img="https://img.freepik.com/premium-photo/glass-cup-black-tea-saucer-with-dry-leaves-green-tea-white-isolated-background_393202-10169.jpg?w=740"
          title="Fresh Tea"
          quantity="1 kg"
          price="700 taka"
        />
        <CommonProduct
          img="https://img.freepik.com/free-photo/raw-spaghetti-nests-fresh-vegetables-bottle-oil-white_114579-31358.jpg?w=740&t=st=1704604021~exp=1704604621~hmac=c8cf7a4fa92bd6abcf7cb0c06815059963fba3c3d69a060d753ca65f0d51b407"
          title="Mastered Oil"
          quantity="1 kg"
          price="910 taka"
        />
        <CommonProduct
          img="https://i.ibb.co/sjxPDNj/beef.png"
          title="Premium Beef"
          quantity="1 kg"
          price="820 taka"
        />
        <CommonProduct
          img="https://img.freepik.com/free-photo/fresh-fish-white_144627-24518.jpg?w=740&t=st=1704603961~exp=1704604561~hmac=64ad15020d4e5d8447d5285ebb5c4644d59e406189e8416cb509f728007a79dd"
          title="See fish"
          quantity="1 kg"
          price="520 taka"
        />
      </div>
    </div>
  );
};

export default PopularProducts;
