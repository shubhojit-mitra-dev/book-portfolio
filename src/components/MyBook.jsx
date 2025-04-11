import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/Cover/Cover";
import BackCover from "./pages/Cover/BackCover";
import coverImg from "../assets/cover.png";
import EndImg from "../assets/back-cover.png";
import FirstPage from "./pages/FirstPage";
// import Projects from "./pages/Projects/Projects.jsx";

function MyBook() {
  const bookRef = useRef();

  const handleBack = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const handleNext = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      <HTMLFlipBook
        width={400}
        height={500}
        showCover="false"
        ref={bookRef}
      >
        <Page number={1} isCover={true}>
          <Cover coverImg={coverImg} title="My Portfolio" />
        </Page>
        <Page number={2} isCover={false}>
          <FirstPage />
        </Page>
        <Page number={3} isCover={false}>
          <FirstPage />
        </Page>
        <Page number={4} isCover={false}>
          <FirstPage />
        </Page>
        <Page number={5} isCover={false}>
          <FirstPage />
        </Page>
        <Page number={4} isCover={false}>
          <FirstPage />
        </Page>
        <Page number={5} isCover={false}>
          <FirstPage />
        </Page>
        <Page number={4} isCover={false}>
          <FirstPage />
        </Page>
        <Page number={5} isCover={false}>
          <FirstPage />
        </Page>
        
        {/* <Page number={6}>
          <Projects ProjectData={ProjectData} />
        </Page>
        <Page number={7}>
          <Projects ProjectData={ProjectData2} />
        </Page> */}
        <Page number={8} isCover={true}>
          <BackCover coverImg={EndImg} title="Thanks" />
        </Page>
      </HTMLFlipBook>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 px-4 py-2 rounded"
        onClick={handleBack}
      >
        Back
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 px-4 py-2 rounded"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default MyBook;
