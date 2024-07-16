import {
  Button,
  Checkbox,
  Collapse,
  Input,
  Radio,
  Slider,
  Tabs,
  TabsProps,
  Tag,
} from "antd";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import oneStar from "../assets/one-star.png";
import twoStar from "../assets/twoStar.png";
import threeStar from "../assets/threeStar.png";
import fourStar from "../assets/fourStar.png";
import fiveStar from "../assets/fiveStar.png";
import HotelCard from "../components/hotels/HotelCard";
import Map from "../components/hotels/Map";
import { useState } from "react";
import HotelSimpleCard from "../components/hotels/HotelSimpleCard";

const { Panel } = Collapse;

const Hotels = () => {
  const { t, i18n } = useTranslation();
  const en = i18n.language == "en";

  const priceTab: TabsProps["items"] = [
    {
      key: "1",
      label: t("eachNightPrice"),
      children: (
        <div>
          <Slider className="custom-slider" range defaultValue={[20, 50]} />
          <div className="mt-3 flex items-center gap-3">
            <div className="w-full mt-3 ">
              <label className="block mb-2" htmlFor="least">
                {t("least")}
              </label>
              <Input
                id="least"
                className="rounded-full p-2 placeholder:font-yekan focus:border-orange-500 focus:shadow-none hover:border-orange-500 "
                type="text"
              />
            </div>
            <p className="self-end mb-3">-</p>
            <div className="w-full mt-3  ">
              <label className="block mb-2" htmlFor="most">
                {t("most")}
              </label>
              <Input
                id="most"
                className="rounded-full p-2 placeholder:font-yekan focus:border-orange-500 focus:shadow-none hover:border-orange-500 "
                type="text"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: t("totalPrice"),

      children: (
        <div>
          <Slider range defaultValue={[20, 50]} />
          <div className="mt-3 flex items-center gap-3">
            <div className="w-full mt-3 ">
              <label className="block mb-2" htmlFor="leastA">
                {t("least")}
              </label>
              <Input
                id="leastA"
                className="rounded-full p-2 placeholder:font-yekan focus:border-orange-500 focus:shadow-none hover:border-orange-500 "
                type="text"
              />
            </div>
            <p className="self-end mb-3">-</p>
            <div className="w-full mt-3  ">
              <label className="block mb-2" htmlFor="mostA">
                {t("most")}
              </label>
              <Input
                id="mostA"
                className="rounded-full p-2 placeholder:font-yekan focus:border-orange-500 focus:shadow-none hover:border-orange-500 "
                type="text"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  type LayoutType = "simple" | "wide";

  const [mapDisplay, setMapDisplay] = useState(true);

  const [layoutType, setLayoutType] = useState<LayoutType>("wide");

  return (
    <div dir={en ? "ltr" : "rtl"} className="flex gap-9">
      <Sidebar />
      <div className="h-fit">
        <div className="flex dark:text-white gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.765 2.13012L2.7225 5.28012C2.0475 5.80512 1.5 6.92262 1.5 7.77012V13.3276C1.5 15.0676 2.9175 16.4926 4.6575 16.4926H13.3425C15.0825 16.4926 16.5 15.0676 16.5 13.3351V7.87512C16.5 6.96762 15.8925 5.80512 15.15 5.28762L10.515 2.04012C9.465 1.30512 7.7775 1.34262 6.765 2.13012Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-gray-400"
            />
            <path
              d="M9 13.4924V11.2424"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-gray-400"
            />
          </svg>

          <p className="text-gray-400">
            {t("nav")} / {t("hotelsList")}
          </p>
        </div>

        <div className="flex gap-5">
          <div className="bg-white space-y-5 mt-3 min-h-[80vh] h-fit dark:bg-gray-900  dark:text-white dark:border-gray-500 rounded-3xl p-5">
            <h1 className="text-xl font-bold border-b dark:border-b-gray-600 pb-5">
              {t("foundedHotels")}
            </h1>
            <div
              dir={en ? "rtl" : "ltr"}
              className="border-b dark:border-b-gray-600  pb-5"
            >
              <Collapse accordion className="border-0 hotels-collapse">
                <Panel
                  header={
                    <p className="text-base font-bold"> {t("hotelsName")}</p>
                  }
                  key="1"
                  className={`custom-panel ${
                    en ? "text-left" : "text-right"
                  }  font-yekan p-0 collapse-pannel bg-white dark:bg-gray-900 `}
                >
                  <form
                    dir={en ? "ltr" : "rtl"}
                    className="mt-3 flex items-center gap-3"
                  >
                    <Input
                      className="rounded-full p-2 placeholder:font-yekan focus:border-orange-500 focus:shadow-none hover:border-orange-500 "
                      type="text"
                      placeholder={t("enterHotelName")}
                    />
                    <Button className="font-yekan rounded-3xl bg-orange-300 p-5 border-0">
                      {t("save")}
                    </Button>
                  </form>
                </Panel>
              </Collapse>
            </div>
            <div
              dir={en ? "rtl" : "ltr"}
              className="border-b dark:border-b-gray-600  pb-5"
            >
              <Collapse
                accordion
                className="border-0 max-w-[278px] hotels-collapse"
              >
                <Panel
                  header={<p className="text-base font-bold"> {t("price")} </p>}
                  key="1"
                  className={`custom-panel ${
                    en ? "text-left" : "text-right"
                  }  font-yekan p-0 collapse-pannel bg-white dark:bg-gray-900 `}
                >
                  <form className="mt-3 flex items-center gap-3 ">
                    <Tabs
                      className="w-full tabs font-yekan"
                      defaultActiveKey="1"
                      items={priceTab}
                    />
                  </form>
                </Panel>
              </Collapse>
            </div>
            <div
              dir={en ? "rtl" : "ltr"}
              className="border-b dark:border-b-gray-600  pb-5"
            >
              <Collapse accordion className="border-0 hotels-collapse">
                <Panel
                  header={<p className="text-base font-bold"> {t("meals")}</p>}
                  key="1"
                  className={`custom-panel ${
                    en ? "text-left" : "text-right"
                  }  font-yekan p-0 collapse-pannel bg-white dark:bg-gray-900 `}
                >
                  <div
                    className="flex  *:font-yekan flex-col mt-3 gap-3"
                    dir={en ? "ltr" : "rtl"}
                  >
                    <Checkbox className="custom-checkbox">
                      {t("super")}
                    </Checkbox>
                    <Checkbox className="custom-checkbox">
                      {t("lunch")}
                    </Checkbox>
                    <Checkbox className="custom-checkbox">
                      {t("breakfest")}
                    </Checkbox>
                  </div>
                </Panel>
              </Collapse>
            </div>
            <div
              dir={en ? "rtl" : "ltr"}
              className="border-b dark:border-b-gray-600  pb-5"
            >
              <Collapse accordion className="border-0 hotels-collapse">
                <Panel
                  header={<p className="text-base font-bold"> {t("rates")}</p>}
                  key="1"
                  className={`custom-panel ${
                    en ? "text-left" : "text-right"
                  }  font-yekan p-0 collapse-pannel bg-white dark:bg-gray-900 `}
                >
                  <div dir={en ? "ltr" : "rtl"} className="mt-3">
                    <Radio.Group className="flex flex-col font-yekan  gap-4">
                      <div className="flex items-center">
                        <Radio
                          className="radio font-yekan"
                          value="oneStar"
                        ></Radio>
                        <img src={oneStar} alt="" />
                      </div>
                      <div className="flex items-center">
                        <Radio
                          className="radio font-yekan"
                          value="twoStar"
                        ></Radio>
                        <img src={twoStar} alt="" />
                      </div>
                      <div className="flex">
                        <Radio className="radio font-yekan" value="threeStar">
                          <img src={threeStar} alt="" />
                        </Radio>
                      </div>
                      <div className="flex">
                        <Radio className="radio font-yekan" value="fourStar">
                          <img src={fourStar} alt="" />
                        </Radio>
                      </div>
                      <div className="flex">
                        <Radio className="radio font-yekan" value="fiveStar">
                          <img src={fiveStar} alt="" />
                        </Radio>
                      </div>
                    </Radio.Group>
                  </div>
                </Panel>
              </Collapse>
            </div>
            <div
              dir={en ? "rtl" : "ltr"}
              className="border-b dark:border-b-gray-600  pb-5"
            >
              <Collapse accordion className="border-0 hotels-collapse">
                <Panel
                  header={
                    <p className="text-base font-bold"> {t("stayType")} </p>
                  }
                  key="1"
                  className={`custom-panel ${
                    en ? "text-left" : "text-right"
                  }  font-yekan p-0 collapse-pannel bg-white dark:bg-gray-900 `}
                >
                  <div dir={en ? "ltr" : "rtl"} className="mt-3">
                    <Radio.Group className="flex flex-col font-yekan  gap-4">
                      <div className="flex items-center">
                        <Radio className="radio font-yekan" value="hotel">
                          {t("hotel")}
                        </Radio>
                      </div>
                      <div className="flex items-center">
                        <Radio className="radio font-yekan" value="ap">
                          {t("ap")}
                        </Radio>
                      </div>
                      <div className="flex">
                        <Radio className="radio font-yekan" value="villa">
                          {t("villa")}
                        </Radio>
                      </div>
                      <div className="flex">
                        <Radio className="radio font-yekan" value="hostel">
                          {t("hostel")}
                        </Radio>
                      </div>
                      <div className="flex">
                        <Radio className="radio font-yekan" value="br">
                          {t("breakfest")}
                        </Radio>
                      </div>
                    </Radio.Group>
                  </div>
                </Panel>
              </Collapse>
            </div>
            <div
              dir={en ? "rtl" : "ltr"}
              className="border-b dark:border-b-gray-600  pb-5"
            >
              <Collapse accordion className="border-0 hotels-collapse">
                <Panel
                  header={
                    <p className="text-base font-bold">
                      {t("selectedLocation")}
                    </p>
                  }
                  key="1"
                  className={`custom-panel ${
                    en ? "text-left" : "text-right"
                  }  font-yekan p-0 collapse-pannel bg-white dark:bg-gray-900 `}
                >
                  <div dir={en ? "ltr" : "rtl"} className="mt-3">
                    <Input
                      className="rounded-full p-2 placeholder:font-yekan focus:border-orange-500 focus:shadow-none hover:border-orange-500 "
                      type="text"
                      placeholder={t("wantedRegion")}
                    />
                  </div>
                </Panel>
              </Collapse>
            </div>
            <div dir={en ? "rtl" : "ltr"} className=" pb-5">
              <Collapse accordion className="border-0 hotels-collapse">
                <Panel
                  header={
                    <p className="text-base font-bold">{t("hotelServices")} </p>
                  }
                  key="1"
                  className={`custom-panel ${
                    en ? "text-left" : "text-right"
                  }  font-yekan p-0 collapse-pannel bg-white dark:bg-gray-900 `}
                >
                  <div
                    className="flex  *:font-yekan flex-col mt-3 gap-3"
                    dir={en ? "ltr" : "rtl"}
                  >
                    <Checkbox className="custom-checkbox">{t("pool")}</Checkbox>
                    <Checkbox className="custom-checkbox">{t("gym")}</Checkbox>
                    <Checkbox className="custom-checkbox">
                      {t("transfer")}
                    </Checkbox>
                    <Checkbox className="custom-checkbox">
                      {t("laundry")}
                    </Checkbox>
                    <Checkbox className="custom-checkbox">{t("comm")}</Checkbox>
                  </div>
                </Panel>
              </Collapse>
            </div>
          </div>
          <div className="min-w-[55.5rem]">
            <div className=" bg-white flex gap-4 items-center mt-3  dark:bg-gray-900 justify-between dark:text-white dark:border-gray-500 rounded-3xl p-2">
              <div className="*:shadow-none *:p-0 *:bg-transparent gap-5 flex items-center *:border-0 ">
                <Button>
                  {t("showType")}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.09586 3.91998L3.92584 1.75L1.75586 3.91998"
                      stroke="#767676"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.92578 12.25V1.75"
                      stroke="#767676"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.9043 10.0801L10.0743 12.2501L12.2443 10.0801"
                      stroke="#767676"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.0742 1.75V12.25"
                      stroke="#767676"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
                <Button>
                  {t("hotelsName")}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.3002 3.72925L5.58353 6.44592C5.2627 6.76675 4.7377 6.76675 4.41686 6.44592L1.7002 3.72925"
                      stroke="#ABABAB"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
                <Button className="!bg-orange-400 !p-3 !px-4 rounded-full text-white">
                  {t("rate")}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.3002 3.72925L5.58353 6.44592C5.2627 6.76675 4.7377 6.76675 4.41686 6.44592L1.7002 3.72925"
                      stroke="white"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
                <Button>
                  {t("price")}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.3002 3.72925L5.58353 6.44592C5.2627 6.76675 4.7377 6.76675 4.41686 6.44592L1.7002 3.72925"
                      stroke="#ABABAB"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
                <Button>
                  {t("category")}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.3002 3.72925L5.58353 6.44592C5.2627 6.76675 4.7377 6.76675 4.41686 6.44592L1.7002 3.72925"
                      stroke="#ABABAB"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
              </div>
              <div className="flex items-center ml-3 gap-3">
                <svg
                  width="18"
                  onClick={() =>
                    setLayoutType(layoutType == "simple" ? "wide" : "simple")
                  }
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M17.5 6.39V2.985C17.5 1.9275 17.02 1.5 15.8275 1.5H12.7975C11.605 1.5 11.125 1.9275 11.125 2.985V6.3825C11.125 7.4475 11.605 7.8675 12.7975 7.8675H15.8275C17.02 7.875 17.5 7.4475 17.5 6.39Z"
                    fill="#767676"
                  />
                  <path
                    d="M17.5 14.8275V11.7975C17.5 10.605 17.02 10.125 15.8275 10.125H12.7975C11.605 10.125 11.125 10.605 11.125 11.7975V14.8275C11.125 16.02 11.605 16.5 12.7975 16.5H15.8275C17.02 16.5 17.5 16.02 17.5 14.8275Z"
                    fill="#767676"
                  />
                  <path
                    d="M8.875 6.39V2.985C8.875 1.9275 8.395 1.5 7.2025 1.5H4.1725C2.98 1.5 2.5 1.9275 2.5 2.985V6.3825C2.5 7.4475 2.98 7.8675 4.1725 7.8675H7.2025C8.395 7.875 8.875 7.4475 8.875 6.39Z"
                    fill="#767676"
                  />
                  <path
                    opacity="0.4"
                    d="M8.875 14.8275V11.7975C8.875 10.605 8.395 10.125 7.2025 10.125H4.1725C2.98 10.125 2.5 10.605 2.5 11.7975V14.8275C2.5 16.02 2.98 16.5 4.1725 16.5H7.2025C8.395 16.5 8.875 16.02 8.875 14.8275Z"
                    fill="#767676"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M14.925 10.125H3.075C1.95 10.125 1.5 10.605 1.5 11.7975V14.8275C1.5 16.02 1.95 16.5 3.075 16.5H14.925C16.05 16.5 16.5 16.02 16.5 14.8275V11.7975C16.5 10.605 16.05 10.125 14.925 10.125Z"
                    fill="#F9B233"
                  />
                  <path
                    d="M14.925 1.5H3.075C1.95 1.5 1.5 1.98 1.5 3.1725V6.2025C1.5 7.395 1.95 7.875 3.075 7.875H14.925C16.05 7.875 16.5 7.395 16.5 6.2025V3.1725C16.5 1.98 16.05 1.5 14.925 1.5Z"
                    fill="#F9B233"
                  />
                </svg>
                <svg
                  className="cursor-pointer"
                  onClick={() => setMapDisplay(!mapDisplay)}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M6.41979 2.50488V13.2524C6.16479 13.2599 5.90979 13.3199 5.72229 13.4324L3.95979 14.4374C2.72979 15.1424 1.71729 14.5574 1.71729 13.1324V5.83488C1.71729 5.36238 2.05479 4.77738 2.47479 4.53738L5.72229 2.67738C5.90979 2.57238 6.16479 2.51238 6.41979 2.50488Z"
                    fill="#767676"
                  />
                  <path
                    d="M11.7974 4.74745V15.495C11.5349 15.5025 11.2799 15.4575 11.0774 15.36L7.13992 13.3875C6.93742 13.29 6.68242 13.245 6.41992 13.2525V2.50495C6.68242 2.49745 6.93742 2.54245 7.13992 2.63995L11.0774 4.61245C11.2799 4.70995 11.5349 4.75495 11.7974 4.74745Z"
                    fill="#767676"
                  />
                  <path
                    opacity="0.4"
                    d="M16.4999 4.86755V12.165C16.4999 12.6375 16.1624 13.2225 15.7424 13.4625L12.4949 15.3225C12.3074 15.4275 12.0524 15.4875 11.7974 15.495V4.74755C12.0524 4.74005 12.3074 4.68005 12.4949 4.56755L14.2574 3.56255C15.4874 2.85755 16.4999 3.44255 16.4999 4.86755Z"
                    fill="#767676"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-white flex gap-4 *:shadow-none *:border-0 items-center mt-3  dark:bg-gray-900  dark:text-white dark:border-gray-500 rounded-3xl p-2">
              <Button>{t("activeFilter")}</Button>
              <Tag className="flex gap-2 items-center">
                {t("category")}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                    fill="#000"
                  />
                  <path
                    d="M9.79502 9.00002L11.52 7.27502C11.7375 7.05752 11.7375 6.69752 11.52 6.48002C11.3025 6.26252 10.9425 6.26252 10.725 6.48002L9.00002 8.20502L7.27502 6.48002C7.05752 6.26252 6.69752 6.26252 6.48002 6.48002C6.26252 6.69752 6.26252 7.05752 6.48002 7.27502L8.20502 9.00002L6.48002 10.725C6.26252 10.9425 6.26252 11.3025 6.48002 11.52C6.59252 11.6325 6.73502 11.685 6.87752 11.685C7.02002 11.685 7.16252 11.6325 7.27502 11.52L9.00002 9.79502L10.725 11.52C10.8375 11.6325 10.98 11.685 11.1225 11.685C11.265 11.685 11.4075 11.6325 11.52 11.52C11.7375 11.3025 11.7375 10.9425 11.52 10.725L9.79502 9.00002Z"
                    fill="#000"
                  />
                </svg>
              </Tag>
              <Tag className="flex gap-2 items-center ">
                دو کیلومتر تا منطقه سعادت آباد
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                    fill="#000"
                  />
                  <path
                    d="M9.79502 9.00002L11.52 7.27502C11.7375 7.05752 11.7375 6.69752 11.52 6.48002C11.3025 6.26252 10.9425 6.26252 10.725 6.48002L9.00002 8.20502L7.27502 6.48002C7.05752 6.26252 6.69752 6.26252 6.48002 6.48002C6.26252 6.69752 6.26252 7.05752 6.48002 7.27502L8.20502 9.00002L6.48002 10.725C6.26252 10.9425 6.26252 11.3025 6.48002 11.52C6.59252 11.6325 6.73502 11.685 6.87752 11.685C7.02002 11.685 7.16252 11.6325 7.27502 11.52L9.00002 9.79502L10.725 11.52C10.8375 11.6325 10.98 11.685 11.1225 11.685C11.265 11.685 11.4075 11.6325 11.52 11.52C11.7375 11.3025 11.7375 10.9425 11.52 10.725L9.79502 9.00002Z"
                    fill="#000"
                  />
                </svg>
              </Tag>
            </div>

            {mapDisplay && <Map />}
            {layoutType == "simple" && (
              <div className="grid grid-cols-2 gap-4">
                <HotelSimpleCard />
                <HotelSimpleCard />
                <HotelSimpleCard />
              </div>
            )}
            {layoutType == "wide" && (
              <div>
                <HotelCard />
                <HotelCard />
                <HotelCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
