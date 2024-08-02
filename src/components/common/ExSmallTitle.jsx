const ExSmallTitle = ({ text, color }) => {
  return (
    <h3
      className={`${
        (color && `text-[${color}]`) || "text-[#444]"
      } text-base sm:text-xl font-bold`}
    >
      {text}
    </h3>
  );
};

export default ExSmallTitle;
