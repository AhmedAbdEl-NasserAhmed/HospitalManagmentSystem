import DoctorSignUpSteps from "@/ui/DoctorSignUpSteps";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-rows-[8rem_1fr] h-screen">
      <nav className="p-[3rem] bg-white border-b-2 border-borderLight">
        <Image src="/images/logo.png" alt="Logo" height={30} width={110} />
      </nav>
      <div className="flex">
        <DoctorSignUpSteps />
        <div className="grow">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
