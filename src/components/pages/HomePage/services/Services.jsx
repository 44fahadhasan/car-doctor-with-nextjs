import Button from "@/components/common/Button";
import { dataLoader } from "@/services/dataLoader";
import Link from "next/link";
import SectionComtent from "../SectionComtent";
import Card from "./Card";

const Services = async () => {
  // load data form api
  const services = await dataLoader(
    `${process.env.NEXT_PUBLIC_API_URL}/api/get-services`
  );

  return (
    <div>
      <SectionComtent
        top={"Service"}
        middle={"Our Service Area"}
        bottom={
          "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        }
      />

      {/* services section container start here */}
      <div class="md:px-10 px-4 py-12">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* single card */}
            {services?.map((service) => (
              <Card key={service?._id} service={service} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <Link href="/services">
          <Button label={"More Services"} outline={true} />
        </Link>
      </div>
    </div>
  );
};

export default Services;
