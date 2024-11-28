import VerifyForgetPasswordEmail from "@/components/Forms/Doctor/VerifyForgetPasswordEmail";
import Links from "@/ui/Links";
import Image from "next/image";
import Link from "next/link";

const ForgetPassword = () => {
  return (
    <div className="bg-secondary h-screen flex flex-col">
      <div className="h-[10rem] px-[15rem] py-[5rem]">
        <Image src="/images/logo.png" alt="Logo" height={38} width={130} />
      </div>
      <div className="flex flex-col px-[2.4rem] py-[3.2rem]  h-[40rem] w-[40rem] rounded-xl bg-white m-auto gap-[2.4rem]">
        <Link
          href="/doctor/login"
          className="font-bold bg-clip-text bg-main-gradient text-transparent text-xl "
        >
          <span className="mr-2 text-xl">&#8592;</span>
          Back
        </Link>
        <div>
          <h3 className="text-[2.4rem] font-extrabold">Forgot Password</h3>
          <p className="text-textMuted text-[1.4rem]">
            No problem! Provide us the email id/ mobile of your account and we
            will send you verification code
          </p>
        </div>
        <VerifyForgetPasswordEmail />
        <Link
          href="/doctor/login"
          className="flex justify-center font-bold bg-clip-text bg-main-gradient text-transparent text-xl "
        >
          Back to log in
        </Link>
      </div>
      <div className="p-10">
        <Links />
      </div>
    </div>
  );
};

export default ForgetPassword;
