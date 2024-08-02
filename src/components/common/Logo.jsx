import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/assets/logo.svg"}
        alt="Car Doctor Logo"
        width={101}
        height={25}
      />
    </Link>
  );
};

export default Logo;
