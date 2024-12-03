"use client";

import { useAppSelector } from "@/lib/hooks";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const currentStep = useAppSelector((state) => state.stepper.currentStep);

  const pathName = usePathname().split("/").at(-1);

  const isAuthenticated = false;

  const { back } = useRouter();

  const routes: {
    [key: string]: string[];
  } = {
    0: ["createaccount", "verifycodesignup"],
    1: ["createaccount", "personaldetails", "verifycodesignup"],
    2: [
      "createaccount",
      "personaldetails",
      "registerdocuments",
      "verifycodesignup"
    ],
    3: [
      "createaccount",
      "personaldetails",
      "registerdocuments",
      "verifycodesignup"
    ]
  };

  useEffect(() => {
    if (isAuthenticated || !routes[currentStep].includes(pathName)) back();
  }, [currentStep, pathName]);

  return children;
};

export default ProtectedRoute;
