import Content from "@/components/common/Content";
import ExSmallTitle from "@/components/common/ExSmallTitle";
import LargeTitle from "@/components/common/LargeTitle";

const SectionComtent = ({ top, middle, bottom, align }) => {
  return (
    <div
      className={`space-y-2 ${
        (align && align) || "text-center"
      } sm:max-w-xl md:sm:max-w-2xl mx-auto px-4 sm:px-0`}
    >
      <ExSmallTitle text={top} color={"#FF3811"} />
      <LargeTitle text={middle} />
      <Content text={bottom} />
    </div>
  );
};

export default SectionComtent;
