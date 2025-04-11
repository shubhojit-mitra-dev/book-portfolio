import { forwardRef } from "react";
import PropTypes from "prop-types";

const Page = forwardRef((props, ref) => {
  const isOdd = props.number % 2 !== 0;
  const gradientClass = isOdd
    ? "bg-gradient-to-l from-[#f7ebc6] to-[#82694e]"
    : "bg-gradient-to-r from-[#f7ebc6] to-[#82694e]";

  return (
    <div className={`demoPage ${gradientClass}`} ref={ref}>
      <div className="h-full">{props.children}</div>
      <p className="text-xs text-end text-black pb-4">
        Page number: {props.number}
      </p>
    </div>
  );
});
Page.displayName = "Page";

Page.propTypes = {
  children: PropTypes.node,
  number: PropTypes.number.isRequired,
};

export default Page;
