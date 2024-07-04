import { Modal, Select } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const { Option } = Select;

const ChildsModal = () => {
  const { t } = useTranslation();

  const ChildModalItems = [
    { label: t("age"), id: "1", options: [{ label: "1", value: "1" }] },
    { label: t("age"), id: "1", options: [{ label: "1", value: "1" }] },
    { label: t("age"), id: "1", options: [{ label: "1", value: "1" }] },
    { label: t("age"), id: "1", options: [{ label: "1", value: "1" }] },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button
        onClick={showModal}
        type="button"
        className="bg-orange-400 gap-3 flex p-2 px-3 rounded-full text-white"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M12 21.9995C17.5228 21.9995 22 17.5224 22 11.9995C22 6.47666 17.5228 1.99951 12 1.99951C6.47715 1.99951 2 6.47666 2 11.9995C2 17.5224 6.47715 21.9995 12 21.9995Z"
            fill="white"
          />
          <path
            d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z"
            fill="white"
          />
        </svg>
        <p>{t("age")}</p>
      </button>
      <Modal
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        open={isModalOpen}
        okButtonProps={{
          hidden: true,
        }}
        cancelButtonProps={{
          hidden: true,
        }}
      >
        <div dir="rtl" className="mt-9 font-yekan ">
          <h1 className="font-bold text-xl">{t("childrensAge")}</h1>
          <p>{t("eachChildAge")}</p>
          <div className="flex items-center gap-4 mt-4">
            {ChildModalItems.map((child) => (
              <div>
                <label htmlFor="my-select" className="block ">
                  {child.label}
                </label>
                <Select
                  className="ant-select"
                  defaultValue="2"
                  style={{ width: 100 }}
                >
                  {child.options.map((op) => (
                    <Option value={op.value}>{op.label}</Option>
                  ))}
                </Select>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ChildsModal;
