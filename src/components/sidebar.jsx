import logo from "../assets/Logo.svg";
import logout from "../assets/Logout.svg";
import home from "../assets/Home.svg";
import movies from "../assets/projector.svg";
import calendar from "../assets/Calendar.svg";
import tv from "../assets/tv.svg";
import { Button } from "./button";

export const Sidebar = () => {
  return (
    <div className="flex fixed left-0 flex-col sm:gap-8 justify-between py-12 w-1/5 min-h-full border border-r rounded-br-[3rem] rounded-tr-[3rem]">
      <div className=" justity-start text-black px-8 ">
        <img src={logo} className="hidden sm:block" />
        {/* <p>MovieSite</p> */}
      </div>
      <div className="w-full flex flex-col gap-2 sm:gap-5">
        <div className="flex justify-start p-3 sm:gap-6 items-center sm:px-8 sm:py-6">
          <img src={home} />
          <p className="hidden sm:block">Home</p>
        </div>
        <div className="flex justify-start p-3 sm:py-6 border-r-2 border-r-red-500 bg-red-50 sm:gap-6 items-center sm:px-8 text-red-600 font-bold ">
          <img src={movies} />
          <p className="hidden sm:inline-block">Movies</p>
        </div>
        <div className="flex justify-start p-3 gap-6 items-center sm:px-8 sm:py-6">
          <img src={tv} />
          <p className="hidden sm:inline-block">TV Series</p>
        </div>
        <div className="flex justify-start p-3 gap-6 items-center sm:px-8 sm:py-6">
          <img src={calendar} />
          <p className="hidden sm:inline-block">Upcoming</p>
        </div>
      </div>
      <div className="sm:px-8 space-y-10">
        <div className="hidden sm:flex flex-col justify-between gap-4 border border-red-600 rounded-2xl px-5 py-8 bg-red-50">
          <p>Play movie quizes and earn free tickets</p>
          <p className="text-sm">50k people are playing now</p>
          <Button
            className="bg-red-100 text-red-500 py-2 px-6 rounded-[1.7rem] self-center text-center"
            text="Start playing"
          />
        </div>
        <div className="flex justify-start sm:gap-6 items-center p-3">
          <img src={logout} />
          <p className="hidden sm:inline-block">Log out</p>
        </div>
      </div>
    </div>
  );
};
