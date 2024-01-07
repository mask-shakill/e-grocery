import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <nav className="bg-white h-[543px] w-56 fixed top-[111px] border py-3">
        <ul className="flex flex-col ps-5 gap-y-2">
          <Link href={"/"}>Popular</Link> <hr />
          <Link href={"/"}>Flash Sales</Link> <hr />
          <Link href={"/"}>Food</Link>
          <hr />
          <Link href={"/"}>Fresh Meats</Link>
          <hr />
          <Link href={"/"}>Discounts</Link>
          <hr />
          <Link href={"/"}>Home and kitchen </Link> <hr />
          <Link href={"/"}>Pet care</Link>
          <hr />
          <Link href={"/"}>Sports zone</Link>
          <hr />
          <Link href={"/"}>Beauty and makeup</Link>
          <hr />
          <Link href={"/"}>Fashion and lifestyle</Link>
          <hr />
          <Link href={"/about"}>About us</Link>
          <hr />
          <Link href={"/"}>Help line</Link>
          <hr />
          <Link href={"/"}>Contact us</Link>
          <hr />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
