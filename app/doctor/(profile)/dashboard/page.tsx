import DoctorOperationProcess from "@/ui/DoctorOperationProcess";
import MainDoctorDashboard from "@/ui/MainDoctorDashboard";

const page = () => {
  const isFinished = false;

  return isFinished ? <MainDoctorDashboard /> : <DoctorOperationProcess />;
};

export default page;
