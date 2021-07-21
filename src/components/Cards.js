import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <>
      <div className="border-box grid grid-cols-2 grid-rows-2 gap-4 ">
        <div className="bg-white bg-opacity-75 shadow-lg p-2">
          <a href="/Collection" className="font-bold ">
            PROJECT
            <p className="text-sm pt-2 font-medium">
              See several collection of my projects.
            </p>
          </a>
        </div>
        <div className="bg-white bg-opacity-75 shadow-lg p-2">
          <a href="/Collection" className="font-bold ">
            Poems
            <p className="text-sm pt-2 font-medium">
              The trick is that The trick is that The trick is that
            </p>
          </a>
        </div>
        <div className="bg-white bg-opacity-75 shadow-lg p-2">
          <a href="/Collection" className="font-bold ">
            Poems
            <p className="text-sm pt-2 font-medium">
              The trick is that The trick is that The trick is that
            </p>
          </a>
        </div>
        <div className="bg-white bg-opacity-75 shadow-lg p-2">
          <a href="/Collection" className="font-bold ">
            Poems
            <p className="text-sm pt-2 font-medium">
              The trick is that The trick is that The trick is that
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
