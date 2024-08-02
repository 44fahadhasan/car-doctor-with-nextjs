import SectionComtent from "./SectionComtent";

const About = () => {
  return (
    <div>
      <SectionComtent
        top={"About Us"}
        middle={
          "Our Service AreaWe are qualified & of experience in this field"
        }
        align={"text-start"}
        bottom={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        }
      />
    </div>
  );
};

export default About;
