import SignInFormDoctor from "@/components/Forms/Doctor/SignInFormDoctor";
import Links from "@/ui/Links";
import Logo from "@/ui/Logo";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="flex bg-white h-screen">
      <div className="bg-[url('/images/SignUpPage.jpg')] bg-cover bg-no-repeat bg-right basis-[72rem] opacity-80 ">
        &nbsp;
      </div>
      <div className="flex flex-col gap-4 grow px-[10rem] py-[3.2rem]">
        <div className="p-[2.4rem] w-[44rem] h-[65rem] flex justify-center items-center ">
          <div className="flex flex-col gap-[2.4rem] w-full">
            <Logo />
            <div>
              <h3 className="text-[2.4rem] font-extrabold">Welcome Back</h3>
              <p className="text-textMuted text-[1.4rem]">
                Please sign in to continue
              </p>
            </div>
            <SignInFormDoctor />
            <p className="text-[1.2rem]">
              Don&apos;t have an account ?{" "}
              <Link
                href="/doctor/createaccount"
                className="font-bold bg-clip-text bg-main-gradient text-transparent "
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <Links />
      </div>
    </div>
  );
};

export default SignIn;
