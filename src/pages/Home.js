import React from "react";
import Cards from "../components/Cards";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="border-box">
        <div className="font-playFair bg-sakura w-full h-screen bg-no-repeat bg-cover bg-top">
          <Navbar />
          <div className="grid py-14 px-4 sm:px-14 lg:grid-cols-2">
            <div className="hidden lg:block"/>
            <div className=" lg:justify-center">
              <Introduction />
            </div>
            <div className="hidden lg:block"/>
            <div className="lg:pt-6">
              <h2 className="text-lg font-bold bg-white bg-opacity-75 p-1.5 mb-2 text-center">COLLECTION</h2>
              <Cards/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
