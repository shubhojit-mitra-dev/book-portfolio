import React from "react";

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
        <h1 className="pr-10 text-transparent old-font-regular text-center text-2xl font-extrabold font-outline-2">
          &copy; All Rights Reserved<br /><br /> A Creation of<br />
          <span className="text-3xl">Shubhojit Mitra</span>
        </h1>
      </div>
    </div>
  );
};

export default Cover;
