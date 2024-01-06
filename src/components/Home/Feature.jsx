import Link from "next/link";
import Image from "next/image";
import IMG from "../../images/feature-1.png";
import IMG3 from "../../images/f3.png";
import IMG2 from "../../images/f2.png";
const Feature = () => {
  return (
    <div className="grid grid-cols-3 gap-x-8 mx-14 mt-9">
      <Link href={"/"}>
        <Image
          width={400}
          height={400}
          className="rounded-lg"
          src={IMG}
        ></Image>
      </Link>
      <Link href={"/"}>
        <Image
          width={400}
          height={400}
          className="rounded-lg"
          src={IMG3}
        ></Image>
      </Link>
      <Link href={"/"}>
        <Image
          width={400}
          height={400}
          className="rounded-lg"
          src={IMG2}
        ></Image>
      </Link>
    </div>
  );
};

export default Feature;
