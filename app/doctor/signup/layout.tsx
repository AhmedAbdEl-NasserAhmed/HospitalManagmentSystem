import CustomizedStepper from "@/components/CustomizedStepper/CustomizedStepper";

import Image from "next/image";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div className="grid grid-rows-[10rem_1fr]">
      <nav className="p-[3rem] bg-white">
        <Image src="/images/logo.png" alt="Logo" height={40} width={130} />
      </nav>
      <div className="flex">
        <div className="w-[48rem] bg-secondary h-[calc(100vh-100px)]  px-[4rem] py-[3.5rem] flex flex-col gap-[3rem]">
          <div>
            <h3 className="text-[2.4rem] font-extrabold">
              Welcome to Tiryaaq!
            </h3>
            <p className="text-[1.4rem] text-textMuted mt-4">
              Millions of patients are looking for the right doctor. Start your
              digital journey
            </p>
          </div>

          <CustomizedStepper
            steps={[
              {
                title: "Create an account",
                description: "This is a description."
              },
              {
                title: "Personal Details",
                description: "This is a description."
              },
              {
                title: "Registration of documents",
                description: "We need to verify your information"
              }
            ]}
          />

          <p className="text-[1.4rem] mt-auto">
            Already have an account ?{" "}
            <Link
              href="/doctor/login"
              className="font-bold bg-clip-text bg-main-gradient text-transparent "
            >
              Sign In
            </Link>
          </p>
        </div>
        <div className="grow">{children}</div>
      </div>
    </div>
  );
};

export default layout;
