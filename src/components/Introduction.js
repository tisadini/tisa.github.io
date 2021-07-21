import React from "react";
import self from "../assets/paper.jpg";

const Introduction = () => {
  return (
    <>
      <div className="grid justify-center lg:pb-4">
        <img
          className="rounded-full w-40 h-40 sm:w-52 sm:h-52 object-cover"
          src={self}
          alt="tisa"
        />
      </div>
      <div className="text-justify my-4 bg-white bg-opacity-75 shadow-lg lg:m-0">
        <div className="p-4 sm:pb-8 sm:px-8">
          <span className="text-sm ">Hello,</span> <br />
          <span className="font-bold text-2xl">I'm Tisadini!</span>
          <p className="text-sm pt-2">
            Deeply in love with fine books, good musics, cats, delicious food. A
            girl who persues her career in the world of technology. A front-end
            developer gonna be.
          </p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
