const TextArea = ({ label, name, rows, required, placeholder, icon }) => {
  return (
    <div>
      <label className="text-[#444] text-sm mb-2 block">{label}</label>
      <div class="relative flex items-center">
        <textarea
          rows={rows}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full text-sm text-[#A2A2A2] border border-[#E8E8E8] px-4 py-3 rounded-lg outline-[#FF3811]"
        ></textarea>

        {/* icon */}
        <span className="text-lg absolute right-4 text-[#A2A2A2]">{icon}</span>
      </div>
    </div>
  );
};

export default TextArea;
