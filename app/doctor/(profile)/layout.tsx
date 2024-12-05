import AsideDoctorDashboard from "@/ui/AsideDoctorDashboard";
import DoctorDashboardNav from "@/ui/DoctorDashboardNav";

const layout = ({ children }) => {
  return (
    <div className="flex ">
      <AsideDoctorDashboard />
      <div className="flex flex-col w-full">
        <DoctorDashboardNav />
        <div className="grow">{children}</div>
      </div>
    </div>
  );
};

export default layout;
