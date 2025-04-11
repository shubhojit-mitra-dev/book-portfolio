import pageImg from '../../assets/page.jpg';

const FirstPage = () => {
  return (
    <div className="relative flex justify-center h-full">
      <img
        src={pageImg}
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Background"
      />
      <p className="relative z-10 p-7 homemade-apple-regular">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum rem
        perferendis quae. Optio, itaque ipsam. Doloribus, vitae et! Porro odio
        incidunt, quisquam soluta doloremque fuga itaque libero? Minus aut dolor
        voluptatum sequi voluptatem deleniti nesciunt consectetur natus facilis
        neque nam quae culpa soluta ab, reprehenderit, asperiores commodi
        voluptate praesentium laudantium.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere rem consectetur dignissimos totam necessitatibus inventore eveniet pariatur. Amet voluptate officiis, ut assumenda ratione fugit. Obcaecati quia architecto minus eius sunt.
      </p>
    </div>
  );
};

export default FirstPage;