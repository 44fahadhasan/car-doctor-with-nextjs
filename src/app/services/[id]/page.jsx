import { dataLoader } from "@/services/dataLoader";

const page = async ({ params }) => {
  const { title } = await dataLoader(`/api/services/${params?.id}`);

  return <h2 className="text-2xl font-extrabold text-gray-800">{title} </h2>;
};

export default page;
