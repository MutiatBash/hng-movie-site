import { Navbar } from "./navbar";
import { Button } from "./button";
import  imdb  from "../assets/imdb.svg";
import  tomato  from "../assets/tomato.svg";

export const Hero = () => {
  return (
    <div className=" bg-blue-900">
      <div className="p-5 sm:py-10 sm:px-20">
        <Navbar />
        <div className="flex-col space-y-5 sm:w-1/3 py-8 sm:py-20 text-white">
          <h1 className="text-5xl text-white font-bold">
            John Wick 3: Parabellum
          </h1>
          <div className="flex justify-start gap-8">
            <div className="flex items-center text-sm space-x-3">
              <img src={imdb} />
              <p>86.0/100</p>
            </div>
            <div className="flex justify-between items-center text-sm space-x-3">
              <img src={tomato} />
              <p>97%</p>
            </div>
          </div>
          <p>
            John Wick is on the run after killing a member of the international
            assassins guild, and with a $14 million price tag on his head, he is
            the target of hit men and women everywhere.
          </p>
          <Button text={"WATCH TRAILER"} className="p-2 bg-red-600 " />
        </div>
      </div>
    </div>
  );
};
