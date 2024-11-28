"use client";

import VerifyCodeForm from "@/components/Forms/Doctor/VerifyCodeForm";
import Links from "@/ui/Links";
import Image from "next/image";
import Link from "next/link";

const VerifyCode = () => {
  return (
    <div className="bg-secondary h-screen flex flex-col">
      <div className="h-[10rem] px-[15rem] py-[5rem]">
        <Link href="/doctor/forgetpassword">
          <Image src="/images/logo.png" alt="Logo" height={38} width={130} />
        </Link>
      </div>
      <div className="flex flex-col px-[2.4rem] py-[3.2rem]  h-[42rem] w-[40rem] rounded-xl bg-white m-auto gap-[2.4rem]">
        <div>
          <h3 className="text-[2.4rem] font-extrabold">Enter 4 Digit Code</h3>
          <p className="text-textMuted text-[1.4rem]">
            Check your Email Address, we have sent the verification code
          </p>
        </div>
        <div>
          <p className="text-textMuted text-[1.4rem]">Phone Number</p>
          <p className="text-textDark text-[1.6rem] font-bold">+1264548978</p>
        </div>

        <VerifyCodeForm />

        <h1 className="text-xl flex items-center gap-4 justify-center">
          Did I not get the code ?
          <Link
            href="/doctor/login"
            className="flex justify-center font-bold bg-clip-text bg-main-gradient text-transparent  "
          >
            Resend
          </Link>
        </h1>
      </div>
      <div className="p-10">
        <Links />
      </div>
    </div>
  );
};

export default VerifyCode;
