import DoctorOperationalHoursForm from "@/components/Forms/Doctor/DoctorOperationalHoursForm";

const DoctorOperationalHours = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-2xl">Default Appointment Duration</h2>
        <p className="text-textMuted text-lg">
          Choose how long your appointments typically go on for.
        </p>
      </div>
      <DoctorOperationalHoursForm />
    </div>
  );
};

export default DoctorOperationalHours;
