import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Collection = () => {
  return (
    <div className="border-box font-playFair h-screen">
      <div className="">
        <Navbar />
        <div className="pb-6">
          <div className=" py-5 text-center grid md:grid-cols-2 gap-3 md:px-20 lg:px-32">
            <h1 className="pb-4 font-semibold md:col-span-2">PROJECT</h1>
            <a href="https://meowme-tv.herokuapp.com/" className="border-box bg-gradient-to-br from-blue-light to-blue-pale mx-8 py-4 px-2 shadow-md rounded-md">
              <header className="pb-4">
                <strong>Meowme</strong>
              </header>
              <p>
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem
              </p>
            </a>
            <a href="https://isaybatch11.herokuapp.com/" className="bg-gradient-to-br from-blue-light to-blue-pale mx-8 py-4 px-2 shadow-md rounded-md">
              <header className="pb-4">
                <strong>I-Say</strong>
              </header>
              <p className="">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem
              </p>
            </a>
          </div>
        </div>
        <div className="pb-6">
          <div className=" py-5 text-center grid md:grid-cols-2 gap-3 md:px-20 lg:px-32">
            <h1 className="pb-4 font-semibold md:col-span-2">PROJECT</h1>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Collection;
