import logoWhite from "../assets/logo-orange.png";
import { Button, Input, Radio } from "antd";
import logoFooter from "../assets/logo-footer.png";
import desc from "../assets/desc.png";

const LoginB2 = () => {
  return (
    <div className=" grid place-items-center bg-no-repeat bg-nature min-h-screen">
      <div className="mt-14">
        <img src={logoWhite} className="m-auto" width="200" alt="" />
        <img src={desc} width="300" alt="" />
        <form action="" dir="rtl" className="space-y-5">
          <div className="w-full mt-3  ">
            <label className="block mb-2" htmlFor="username">
              <span className="text-red-500">*</span> نام کاربری
            </label>
            <Input
              id="username"
              className="rounded-full p-2 placeholder:font-yekan focus:border-orange-500 focus:shadow-none hover:border-orange-500 "
              type="text"
              placeholder="aliowed@@@m.com"
            />
          </div>
          <div className="w-full mt-3  ">
            <label className="block mb-2" htmlFor="password">
              <span className="text-red-500">*</span> رمز عبور
            </label>
            <Input.Password
              id="password"
              className="rounded-full p-2 placeholder:font-yekan focus:border-orange-500 focus:shadow-none hover:border-orange-500 "
              type="text"
              placeholder=" 123456"
            />
          </div>
          <div>
            <Radio className="font-yekan radio">به یاد سپردن رمز عبور</Radio>
          </div>
          <div>
            <Button className="bg-green-600 py-5 text-white  font-yekan rounded-full w-full border-0">
              ورود
            </Button>
          </div>
        </form>
        <img className="m-auto mt-4" width="200" src={logoFooter} alt="" />
      </div>
    </div>
  );
};

export default LoginB2;
