import { useTranslation } from "react-i18next";
import hotels from "../assets/building-3.svg";
import cloud from "../assets/cloud-connection.svg";
import circle from "../assets/dollar-circle.svg";
import grid from "../assets/grid-6.svg";
import { Link } from "react-router-dom";

type ActiveSection = "booking" | "hotels";

const activeClassNames = ["bg-orange-400", "w-[38px]", "p-2", "rounded-full"];

const Sidebar = ({ active }: { active?: ActiveSection }) => {
  const { i18n } = useTranslation();

  const en = i18n.language == "en";
  return (
    <div className={en ? "me-[3rem]" : "ml-[3rem]"}>
      <div
        className={`bg-white dark:bg-gray-900 ${
          en ? "ml-2" : "mr-2"
        } mb-3 rounded-full p-2 w-fit min-h-[540px] h-fit fixed flex justify-center items-center `}
      >
        <div className="space-y-10 flex  flex-col items-center">
          <a href="/" className={!active ? activeClassNames.join(" ") : ""}>
            <img src={hotels} alt="" />
          </a>
          <a
            href="/booking"
            className={active == "booking" ? activeClassNames.join(" ") : ""}
          >
            <img src={grid} alt="" />
          </a>
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
    </div>
  );
};

export default Sidebar;
