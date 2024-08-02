const Button = ({ toggle, label, outline }) => {
  return (
    <button
      className={`${
        toggle && "hidden lg:block"
      } px-4 py-2.5 text-sm rounded font-bold transition-all ease-in-out duration-300 ${
        (outline &&
          "hover:text-white border-2 border-[#FF3811] hover:bg-[#FF3811] bg-transparent text-[#FF3811]") ||
        "text-white bg-[#FF3811]"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
