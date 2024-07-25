import { useTranslation } from "react-i18next";
import cloud from "../assets/cloud-connection.svg";
import circle from "../assets/dollar-circle.svg";

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
            <svg
              className={`max-w-full h-auto *:fill-black ${
                active && "*:!fill-[#767676]"
              }`}
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="#767676"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M17.5117 17.2084V25.6551L3.51168 25.6784V17.2084L3.5 15.4584V8.24842C3.5 7.46675 3.89668 6.74338 4.53835 6.31171L9.20502 3.19673C9.98668 2.67173 11.0133 2.67173 11.795 3.19673L16.4616 6.31171C17.115 6.74338 17.5 7.46675 17.5 8.24842V15.4584L17.5117 17.2084Z"
              />
              <path d="M25.6668 24.7916H24.1851V21.2916C25.2935 20.93 26.0985 19.8916 26.0985 18.6666V16.3333C26.0985 14.805 24.8502 13.5566 23.3218 13.5566C21.7935 13.5566 20.5451 14.805 20.5451 16.3333V18.6666C20.5451 19.88 21.3385 20.9066 22.4235 21.28V24.7916H2.3335C1.85516 24.7916 1.4585 25.1883 1.4585 25.6666C1.4585 26.145 1.85516 26.5416 2.3335 26.5416H23.2518C23.2752 26.5416 23.2868 26.5533 23.3101 26.5533C23.3335 26.5533 23.3452 26.5416 23.3685 26.5416H25.6668C26.1452 26.5416 26.5418 26.145 26.5418 25.6666C26.5418 25.1883 26.1452 24.7916 25.6668 24.7916Z" />
              <path d="M17.5117 17.2083H3.51168L3.5 15.4583H17.5L17.5117 17.2083Z" />
              <path d="M10.5 26.5417C10.0217 26.5417 9.625 26.1451 9.625 25.6667V21.2917C9.625 20.8134 10.0217 20.4167 10.5 20.4167C10.9783 20.4167 11.375 20.8134 11.375 21.2917V25.6667C11.375 26.1451 10.9783 26.5417 10.5 26.5417Z" />
              <path d="M10.5002 12.5416C11.6277 12.5416 12.5418 11.6275 12.5418 10.4999C12.5418 9.37234 11.6277 8.45825 10.5002 8.45825C9.37258 8.45825 8.4585 9.37234 8.4585 10.4999C8.4585 11.6275 9.37258 12.5416 10.5002 12.5416Z" />
            </svg>
          </a>
          <a
            href="/booking"
            className={active == "booking" ? activeClassNames.join(" ") : ""}
          >
            <svg
              className={`max-w-full h-auto *:fill-black ${
                !active && "*:!fill-[#767676]"
              }`}
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M25.6667 9.11159V9.91658H10.5V2.33325H18.8883C23.135 2.33325 25.6667 4.86492 25.6667 9.11159Z"
                fill="#767676"
              />
              <path
                opacity="0.4"
                d="M25.6667 18.0835V18.8885C25.6667 23.1352 23.135 25.6668 18.8883 25.6668H10.5V18.0835H25.6667Z"
                fill="#767676"
              />
              <path
                d="M10.4997 2.33325V25.6666H9.11134C4.86467 25.6666 2.33301 23.1349 2.33301 18.8883V9.11159C2.33301 4.86492 4.86467 2.33325 9.11134 2.33325H10.4997Z"
                fill="#767676"
              />
              <path
                opacity="0.6"
                d="M25.6667 9.91675H10.5V18.0834H25.6667V9.91675Z"
                fill="#767676"
              />
            </svg>
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
