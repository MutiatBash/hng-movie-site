import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
export const Footer = ({}) => {
  return (
    <div className="p-5 sm:py-8 flex-col items-center justify-center space-y-4">
      <div className="flex justify-center gap-6 sm:gap-12">
        <img src={facebook} />
        <img src={instagram} />
        <img src={twitter} />
        <img src={youtube} />
      </div>
      <div className="flex flex-col font-bold sm:flex-row py-3 justify-center space-x-2 sm:gap-10 items-center text-sm text-center">
        <p className="">Conditions of Use</p>
        <p className="">Privacy & Policy</p>
        <p className="">Press Room</p>
      </div>
      <p className="text-center text-xs sm:text-sm">2023 MovieSite by Mutiat Bashua</p>
    </div>
  );
};
