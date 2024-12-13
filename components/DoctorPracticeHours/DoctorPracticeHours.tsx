import OperationHoursList from "./OperationHoursList";

const DoctorPracticeHours = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Add Practice Days</h2>
        <p className="text-lg text-textMuted">
          Specify the days &apos; &lsquo;ll be practising and the operating
          hours of your clinic.
        </p>
      </div>
      <OperationHoursList />
    </div>
  );
};

export default DoctorPracticeHours;
