import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DataAdviseCardCurosel: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false, // Hide the dots
  };

  const dummyData = [
    { title: "Wallet 1", content: "get market" },
    { title: "Wallet 2", content: "get crypto" },
    { title: "Wallet 3", content: "start new technologies and find jobs" },
  ];

  return (
    <Slider {...settings}>
      {dummyData.map((data, index) => (
        <div
          key={index}
          className="group relative flex h-[100px] w-full max-w-[350px] flex-col overflow-hidden rounded-xl bg-white shadow-xl transition-all hover:shadow-lg md:min-h-[100px] md:max-w-[360px] sm:h-[150px] sm:max-h-[150px] md:mb-1 "
        >
          <div className="flex-center flex-grow bg-gray-200 bg-cover bg-center text-black">
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">{data.title}</div>
            </div>
          </div>

          <div className="flex h-240 sm:h-[100px] md:h-[180px]  flex-col gap-3 p-5 md:gap-4 sm:h-70">
            {/* Additional content for each card */}
            <div>{data.content}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default DataAdviseCardCurosel;
