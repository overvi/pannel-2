import loginHotel from "../assets/login-hotel.png";
import title from "../assets/title.png";
import logoWhite from "../assets/logo-white.png";
import { Button, Input, Radio } from "antd";
import logoFooter from "../assets/logo-footer.png";

const Login = () => {
  return (
    <div className=" bg-gradient-to-r grid place-items-center from-orange-200 to-[#FFAA33] min-h-screen">
      <div className="flex bg-right  bg-contain w-full items-center justify-center bg-lines bg-no-repeat gap-52 ">
        <div>
          <div className="relative">
            <img width="500" src={loginHotel} alt="" />
            <div className="absolute bottom-10 left-20">
              <img width="250" src={title} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img src={logoWhite} alt="" />
          <form action="" dir="rtl" className="space-y-5">
            <div className="w-full mt-3  ">
              <label className="block mb-2" htmlFor="">
                <span className="text-red-500">*</span> نام کاربری
              </label>
              <Input
                className="rounded-full p-2 placeholder:font-yekan focus:border-orange-500 focus:shadow-none hover:border-orange-500 "
                type="text"
                placeholder="aliowed@@@m.com"
              />
            </div>
            <div className="w-full mt-3  ">
              <label className="block mb-2" htmlFor="">
                <span className="text-red-500">*</span> رمز عبور
              </label>
              <Input.Password
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
    </div>
  );
};

export default Login;
