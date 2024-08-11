import Button from "@/components/common/Button";
import HeroBannar from "@/components/common/HeroBannar";
import { dataLoader } from "@/services/dataLoader";
import Link from "next/link";

const page = async ({ params }) => {
  // single service data load form databse
  const { _id, img, title } = await dataLoader(`/api/services/${params?.id}`);

  return (
    <div>
      <HeroBannar img={img} title={title} />

      <Link href={`/checkout/${_id}`}>
        <Button label={"Book Now"} />
      </Link>
    </div>
  );
};

export default page;
