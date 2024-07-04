import { useTranslation } from "react-i18next";
import hotels from "../assets/building-3.svg";
import cloud from "../assets/cloud-connection.svg";
import circle from "../assets/dollar-circle.svg";
import grid from "../assets/grid-6.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { i18n } = useTranslation();

  const en = i18n.language == "en";
  return (
    <div
      className={`bg-white dark:bg-gray-900 ${
        en ? "ml-2" : "mr-2"
      } mb-3 rounded-full p-2 w-fit min-h-[740px] flex justify-center items-center `}
    >
      <div className="space-y-10 flex flex-col items-center">
        <div className="bg-orange-400 p-2 rounded-full">
          <img width="38" src={hotels} alt="" />
        </div>
        <div>
          <img src={grid} alt="" />
        </div>
        <div>
          <img src={cloud} alt="" />
        </div>
        <Link to={"/messages"}>
          <div>
            <img src={circle} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
