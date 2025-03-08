import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  colorfulBorder,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {colorfulBorder ? (
        <div className="absolute inset-0 gradient-border">
          <div className="relative z-1 h-full w-full"></div>
        </div>
      ) : null}
      
      <div className={`relative z-1 ${colorfulBorder ? "px-5 py-5 md:px-10 md:py-10" : ""}`}>
        {children}
      </div>

      {/* Left border */}
      <div className="absolute top-0 left-5 w-[1px] h-full bg-white/10 lg:left-7.5 xl:left-10" />
      
      {/* Right border */}
      <div className="absolute top-0 right-5 w-[1px] h-full bg-white/10 lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          {/* Top border */}
          <div
            className={`absolute top-0 left-7.5 right-7.5 h-[1px] bg-white/10 ${
              crossesOffset && crossesOffset
            } xl:left-10 xl:right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
