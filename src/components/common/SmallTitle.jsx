const SmallTitle = ({ text, color }) => {
  return (
    <h2
      className={`${
        (color && `text-[${color}]`) || "text-[#444]"
      } text-base sm:text-xl font-bold`}
    >
      {text}
    </h2>
  );
};

export default SmallTitle;
