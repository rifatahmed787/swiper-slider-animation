import { Icon } from "@iconify/react"; // icon

const TopNavbar = () => {
  return (
    <div className="md:block hidden bg-secondary text-white h-10 border-b border-gray-100 px-36 pt-1">
      <div className="top-nav flex overflow-hidden items-center justify-between">
        {/* Left Side: Text Animation */}
        <div>
          <div className="top-nav-text">Welcome Weero Dental Clinic</div>
          <div className="top-nav-text">
            <span className="pl-2">24/7 hours open</span>
          </div>
        </div>
        {/* Right Side: Social icon & Location */}
        <div className="flex gap-3">
          <Icon
            width={25}
            className="hover:cursor-pointer hover:skew-y-4 duration-300"
            icon="mdi:location"
          />
          <Icon
            width={25}
            className="hover:cursor-pointer hover:skew-y-4 duration-300"
            icon="devicon:twitter"
          />
          <Icon
            width={25}
            className="hover:cursor-pointer hover:skew-y-4 duration-300"
            icon="ic:baseline-facebook"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
