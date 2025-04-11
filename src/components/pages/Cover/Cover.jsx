import PropTypes from "prop-types";

const Cover = ({ coverImg }) => {
  const coverImgStyle = {
    backgroundImage: `url(${coverImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div className="h-full" style={coverImgStyle}>
      <div className="h-full flex justify-center items-center page-shadow">
        <h1 className="pl-10 text-transparent old-font-black text-center text-5xl font-extrabold font-outline-2">
          Legends<br />of<br />Shubhojit<br />Mitra
        </h1>
      </div>
    </div>
  );
};

Cover.propTypes = {
  coverImg: PropTypes.string.isRequired,
};

export default Cover;