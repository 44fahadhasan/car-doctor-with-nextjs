import ExSmallTitle from "@/components/common/ExSmallTitle";
import SmallTitle from "@/components/common/SmallTitle";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Card = ({ service }) => {
  const { _id, title, img, price } = service || {};
  return (
    <div className="rounded-lg overflow-hidden hover:shadow-md duration-300 p-5 border-[#E8E8E8] border">
      <Image
        src={img}
        alt={title}
        width={1000}
        height={1000}
        className="object-cover w-full h-52 rounded-md"
      />

      <div className="space-y-2 mt-6">
        <SmallTitle text={title} />

        <div className="flex justify-between items-center">
          <ExSmallTitle text={`Price: ${price}`} color={"#FF3811"} />

          <div>
            <Link
              href={`/services/${_id}`}
              className="mt-4  text-[#FF3811] text-2xl"
            >
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
