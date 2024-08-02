const LargeTitle = ({ text, color }) => {
  return (
    <h1
      className={`${
        (color && color) || "text-[#151515]"
      } text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold`}
    >
      {text}
    </h1>
  );
};

export default LargeTitle;
