import ResetPasswordForm from "@/components/Forms/Doctor/ResetPasswordForm";
import Links from "@/ui/Links";
import Image from "next/image";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <div className="bg-secondary h-screen flex flex-col">
      <div className="h-[10rem] px-[15rem] py-[5rem]">
        <Link href="/doctor/forgetpassword">
          <Image src="/images/logo.png" alt="Logo" height={38} width={130} />
        </Link>
      </div>
      <div className="flex flex-col px-[2.4rem] py-[1.6rem]  h-[40rem] w-[40rem] rounded-xl bg-white m-auto gap-[2.4rem]">
        <div>
          <h3 className="text-[2.4rem] font-extrabold">Reset Password</h3>
          <p className="text-textMuted text-[1.4rem]">
            In order to protect your account make sure your password is strong
            enough
          </p>
        </div>
        <ResetPasswordForm />
      </div>
      <div className="p-10">
        <Links />
      </div>
    </div>
  );
};

export default ResetPassword;
