const SmallTitle = ({ text, color, size }) => {
  return (
    <h2
      className={`${(color && `text-[${color}]`) || "text-[#444]"} ${
        (size && size) || "text-base sm:text-xl"
      } font-bold`}
    >
      {text}
    </h2>
  );
};

export default SmallTitle;
