import AsideDoctorDashboard from "@/ui/AsideDoctorDashboard";

const layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <AsideDoctorDashboard />
      <div className="flex flex-col w-full">
        <nav className="bg-gree-500 h-[60px] bg-yellow-300"></nav>
        <div className="grow bg-red-500">{children}</div>
      </div>
    </div>
  );
};

export default layout;
