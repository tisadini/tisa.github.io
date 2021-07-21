import React from "react";
import selfPicture from "../assets/cloud.jpg";

const HomeRight = () => {
  return (
    <div className="font-playFair leading-loose md:grid md:grid-rows-3">
      <section className="md:w-2/3 md:span-row-1">
        <img
          className="md:rounded-r-full"
          src={selfPicture}
          alt="tisadini ossiana"
        />
      </section>
      <section className=" md:w-3/4 md:row-start-2 md:row-end-2 md:justify-self-end md:rounded-l-full md:pl-10">
        <header className="">
          Hello, <br />
          <strong className="text-5xl">I am Tisa</strong>
        </header>
      </section>
      <section className="py-2 md:round-start-3 md:rounded-r-full md:bg-pastelRed ">
        <p className="">
          Deeply in love with design, technology, good books, delicious foods,
          and cats!
        </p>
      </section>
    </div>
  );
};

export default HomeRight;
