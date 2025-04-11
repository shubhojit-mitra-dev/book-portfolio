// import React from "react";
import { useEffect } from "react";
import BgTexture from "./assets/brown-wooden-flooring.jpg";
import MyBook from "./components/MyBook";

const BgTextureStyle = {
  backgroundImage: `url(${BgTexture})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "fixed", // Ensure it stays fixed in the background
  top: 0,
  left: 0,
  width: "100vw", // Cover the entire viewport width
  height: "100vh", // Cover the entire viewport height
  zIndex: -1, // Ensure it stays behind other elements
  filter: "brightness(0.9)", // Optional: Adjust brightness for better text visibility
};

const App = () => {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable scrolling on cleanup
      document.body.style.overflow = "auto";
    };
  }, []);

  const goToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Background image */}
      <div style={BgTextureStyle}></div>
      <div
        id="home"
        className="h-screen w-screen flex flex-col gap-5 justify-center items-center"
      >
        <h1 className="text-5xl  font-bold text-white">My Portfolio</h1>
        <h2 className="text-3xl font-bold text-white">Welcome to my book</h2>
        <button
          className="px-6 py-3 bg-orange-500 text-white rounded-xl"
          onClick={() => goToSection("book")}
        >
          My Story
        </button>
      </div>
      <div
        id="book"
        className="relative h-screen w-screen flex justify-center items-center"
      >
        <button
          className="absolute top-5 left-5 text-white z-20"
          onClick={() => goToSection("home")}
        >
          Back
        </button>
        <MyBook />
      </div>
    </div>
  );
};

export default App;
