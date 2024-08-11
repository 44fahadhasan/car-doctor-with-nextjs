import Image from "next/image";

const HeroBannar = ({ img, title }) => {
  return (
    <div className="relative before:absolute before:w-full before:h-72 before:inset-0 before:bg-black before:opacity-50 before:z-10 bg-gradient-to-r from-[#151515] to-[#15151500]">
      <Image
        width={1000}
        height={1000}
        src={img}
        alt="Banner Image"
        className="absolute inset-0 w-full h-72 object-cover"
      />

      <div className="min-h-72 relative z-50 h-72 max-w-6xl mx-auto flex flex-col justify-center items-start text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default HeroBannar;
