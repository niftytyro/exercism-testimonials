import React from "react";
import ExercismLogo from "../assets/exercism-logo.svg";
import DashboardBg from "../assets/icons/dashboard-bg.svg";
import DashboardFg from "../assets/icons/dashboard-fg.svg";
import TracksIcon from "../assets/icons/tracks.svg";
import MentoringIcon from "../assets/icons/mentoring.svg";
import ContributeIcon from "../assets/icons/contribute.svg";
import HappyIcon from "../assets/icons/mood-happy.svg";
import JourneysIcon from "../assets/icons/journeys.svg";
import NotificationsIcon from "../assets/icons/notifications.svg";
import ReputationIcon from "../assets/icons/reputation.svg";
import MenuIcon from "../assets/icons/menu.svg";
import ProfileImage from "../assets/images/profile.png";

const notifications = 2;

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center w-full border-b border-periwinkle20 py-1 px-8 text-base font-semibold">
      <img src={ExercismLogo} alt="Exercism Logo" />
      <div
        id="dashboard"
        className="flex justify-center items-center relative ml-8"
      >
        <img src={DashboardBg} alt="Dashboard Icon" />
        <img
          className="absolute top-[19px] left-[21px]"
          src={DashboardFg}
          alt="Dashboard Icon"
        />
        <h3 className="ml-1">Dashboard</h3>
      </div>
      <div
        id="nav"
        className="flex justify-center items-center space-x-8 ml-8 text-periwinkle80"
      >
        <div className="flex">
          <img src={TracksIcon} alt="Tracks Icon" />
          <h4 className="ml-4">Tracks</h4>
        </div>
        <div className="flex">
          <img src={MentoringIcon} alt="Mentoring Icon" />
          <h4 className="ml-4">Mentoring</h4>
        </div>
        <div className="flex">
          <img src={ContributeIcon} alt="Contribute Icon" />
          <h4 className="ml-4">Contribute</h4>
        </div>
      </div>
      <div className="flex-1"></div>
      <div className="flex items-center space-x-9">
        <div className="relative">
          <img src={HappyIcon} alt="Testimonials Icon" />
          <div className="absolute top-0 right-0 translate-x-1 -translate-y-1 w-[14px] h-[14px] bg-fire-opal rounded-full border-white border-[3px]"></div>
        </div>
        <div className="relative">
          <img src={JourneysIcon} alt="Journeys Icon" />
          <div className="absolute top-0 right-0 translate-x-1 -translate-y-1 w-[14px] h-[14px] bg-fire-opal rounded-full border-white border-[3px]"></div>
        </div>
      </div>
      <div className="relative bg-old-lace px-3 py-2 rounded-lg ml-10 shadow-md">
        <img src={NotificationsIcon} alt="Notifications Icon" />
        <div className="absolute flex justify-center items-center top-0 right-0 translate-x-1/2 -translate-y-2 w-6 h-6 bg-fire-opal rounded-full text-xs text-white">
          {notifications}
        </div>
      </div>
      <div className="p-[3px] bg-gradient-to-b from-crayola to-xanthic ml-9 rounded-full">
        <div className="relative flex items-center bg-periwinkle100 rounded-full py-1 px-3 text-white">
          <img className="mr-2" src={ReputationIcon} alt="Reputation Icon" />
          300K
          <div className="absolute flex justify-center items-center top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[18px] h-[18px] border-[3px] bg-fire-opal rounded-full text-xs text-white"></div>
        </div>
      </div>
      <img
        className="w-[42px] h-[42px] ml-9 mr-5 rounded-full"
        src={ProfileImage}
        alt="Profile Icon"
      />
      <img src={MenuIcon} alt="Menu Icon" />
    </nav>
  );
};

export default Navbar;
