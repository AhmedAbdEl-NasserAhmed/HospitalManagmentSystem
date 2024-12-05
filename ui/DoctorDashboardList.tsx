"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import {
  HiChevronLeft,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineChat,
  HiOutlineCog,
  HiOutlineHome,
  HiOutlineQuestionMarkCircle,
  HiOutlineUsers
} from "react-icons/hi";

const menuItems: {
  id: number;
  name: string;
  to: string;
  icon: ReactNode;
}[] = [
  {
    id: 1,
    name: "dashboard",
    to: "/doctor/dashboard",
    icon: <HiOutlineHome />
  },
  {
    id: 2,
    name: "appointments",
    to: "/doctor/appointments",
    icon: <HiOutlineCalendar />
  },
  {
    id: 3,
    name: "Patients",
    to: "/doctor/patients",
    icon: <HiOutlineUsers />
  },
  {
    id: 4,
    name: "messages",
    to: "/doctor/messages",
    icon: <HiOutlineChat />
  },
  {
    id: 5,
    name: "question & Answer",
    to: "/doctor/question & Answer",
    icon: <HiOutlineQuestionMarkCircle />
  },
  {
    id: 6,
    name: "reports",
    to: "/doctor/reports",
    icon: <HiOutlineChartBar />
  }
];
const DoctorDashboardList = ({
  setExpandWidth,
  expandWidth
}: {
  expandWidth: boolean;
  setExpandWidth: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathName = usePathname().split("/").at(-1);

  return (
    <div className="p-6 flex flex-col gap-10 h-full ">
      <ul className="border-b-2 border-borderLight flex flex-col gap-6 text-xl pb-8 ">
        {menuItems.map((link) => (
          <li
            key={link.id}
            className={`relative px-4 hover:bg-secondaryBackground transition-all duration-200   ${
              pathName === link.name ? "bg-secondaryBackground" : ""
            }`}
          >
            <Link href={link.to} className="flex items-center gap-3 py-4">
              <span className="text-defaultGrey text-3xl ">{link.icon}</span>
              <p
                className={`capitalize duration-100 ${
                  expandWidth ? "hidden" : "block"
                }`}
              >
                {link.name}
              </p>
            </Link>
            {pathName === link.name && (
              <span className="bg-main-gradient h-full w-[2.5px] absolute top-0 left-0 ">
                &nbsp;
              </span>
            )}
          </li>
        ))}
      </ul>

      <Link href="" className="flex items-center gap-3 px-4">
        <span className="text-3xl text-defaultGrey">
          <HiOutlineCog />
        </span>
        <p className={`text-xl ${expandWidth ? "hidden" : "block"}`}>
          Settings
        </p>
      </Link>

      <button
        type="button"
        className="mt-auto border-2 border-borderLight px-4 py-2 rounded-lg flex items-center justify-center "
        onClick={() => setExpandWidth((prev) => !prev)}
      >
        <span className="text-2xl text-center">
          <HiChevronLeft />
        </span>
      </button>
    </div>
  );
};

export default DoctorDashboardList;
