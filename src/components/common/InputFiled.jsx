"use client";
import { useState } from "react";

const InputFiled = ({
  label,
  name,
  type,
  required,
  placeholder,
  icon,
  openIcon,
  closeIcon,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <label className="text-[#444] text-sm mb-2 block">{label}</label>
      <div className="relative flex items-center">
        <input
          name={name}
          type={(toggle && "text") || type}
          required={required}
          className="w-full text-sm text-[#A2A2A2] border border-[#E8E8E8] px-4 py-3 rounded-lg outline-[#FF3811]"
          placeholder={placeholder}
        />

        {/* icon */}
        {
          <span className="text-lg absolute right-4 text-[#A2A2A2]">
            {(icon && icon) || (
              <span
                onClick={() => setToggle(!toggle)}
                className="cursor-pointer"
              >
                {toggle ? openIcon : closeIcon}
              </span>
            )}
          </span>
        }
      </div>
    </div>
  );
};

export default InputFiled;
