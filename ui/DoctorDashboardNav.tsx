import CustomizedButton from "@/components/CustomizedButton";
import SearchInput from "@/components/SearchInput/SearchInput";
import Image from "next/image";
import { HiOutlineBell } from "react-icons/hi";

const DoctorDashboardNav = () => {
  return (
    <nav className="bg-gree-500 h-[60px] border-[0.2px] border-borderLight shadow-sm flex items-center justify-between p-8">
      <div className="w-1/4">
        <SearchInput />
      </div>
      <div className="flex items-center gap-8">
        <CustomizedButton type="button" size="small">
          + Add
        </CustomizedButton>
        <span className="text-3xl">
          <HiOutlineBell />
        </span>
        <div className="flex items-center gap-4">
          <Image
            src="/images/noAvatar.png"
            alt="profile photo"
            width={25}
            height={25}
          />
          <p className="text-xl">Dr.Ahmed Nasser</p>
        </div>
      </div>
    </nav>
  );
};

export default DoctorDashboardNav;
