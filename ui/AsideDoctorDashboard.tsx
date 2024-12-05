"use client";

import DoctorDashboardList from "@/ui/DoctorDashboardList";
import Image from "next/image";
import { useState } from "react";

const AsideDoctorDashboard = () => {
  const [expandWidth, setExpandWidth] = useState<boolean>(false);

  return (
    <aside
      className={` ${
        expandWidth ? "w-[80px]" : "w-[250px]"
      } transition-all duration-200  flex flex-col gap-4`}
    >
      <div className="p-8 flex justify-center border-borderLight border-b-2">
        <div className="flex items-center">
          <Image
            className="object-contain"
            src="/images/logoNoText.png"
            alt="Logo"
            height={40}
            width={80}
          />
          <p
            className={`text-3xl font-semibold ${
              expandWidth ? "hidden" : "block"
            } `}
          >
            Tiryaaq
          </p>
        </div>
      </div>
      <DoctorDashboardList
        expandWidth={expandWidth}
        setExpandWidth={setExpandWidth}
      />
    </aside>
  );
};

export default AsideDoctorDashboard;
