import React from "react";

const Packages: React.FC = () => {
  return (
    <div id="package">
      <h1 className="text-center" data-aos="fade-up">
        Packages
      </h1>
      <div className="card-1 text-center" data-aos="fade-up">
        <h2>FREE PACK</h2>
        <p>
          you will get a wide variety of movies and <br></br> songs but Please
          be aware that you will<br></br> encounter multiple ads during your
          visit.
        </p>
      </div>
      <div className="card-2 text-center" data-aos="fade-up">
        <h2>PREMIUM PACK</h2>
        <p>
          Go premuim and say goodbye to ads by <br></br> subscribing to our
          premium plan<br></br> Enjoy uninterupted acces to our content<br></br>
          without any interuptions.
        </p>
      </div>
    </div>
  );
};
export default Packages;
