import Image from "next/image";
import DoctorInitialApplication from "./DoctorInitialApplication";

const DoctorOperationProcess = () => {
  return (
    <div className="p-14 bg-secondary h-full flex flex-col gap-10">
      <h2 className="text-3xl font-semibold">Good Morning 👋 Dr. Ahmed</h2>
      <div className="w-full bg-main-gradient h-[220px] rounded-lg flex items-center p-10 text-white justify-between relative overflow-hidden ">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold">Welcome to Tiryaaq!</h2>
          <p className="text-lg tracking-wider">
            Thank you for joining Tiryaaq. To get started, here are some
            elements you should take a look
          </p>
        </div>
        <div className="absolute right-14 top-16 z-20 ">
          <Image
            src="/images/doctors.png"
            alt="doctors image"
            width={200}
            height={250}
          />
          <span className="absolute top-20 -right-8 w-[250px] h-[250px] rounded-full bg-black bg-opacity-25  -z-10 ">
            &nbsp;
          </span>
        </div>
      </div>
      <h2 className="font-semibold text-2xl">Get started with Tiryaaq </h2>
      <DoctorInitialApplication />
    </div>
  );
};

export default DoctorOperationProcess;
