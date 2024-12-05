import OperationHoursRow from "./OperationHoursRow";

const daysOfWeek: {
  id: number;
  name: string;
}[] = [
  { id: 1, name: "Sunday" },
  { id: 2, name: "Monday" },
  { id: 3, name: "Tuesday" },
  { id: 4, name: "Wednesday" },
  { id: 5, name: "Thursday" },
  { id: 6, name: "Friday" },
  { id: 7, name: "Saturday" }
];

const OperationHoursList = () => {
  return (
    <ul className="flex flex-col gap-6">
      {daysOfWeek.map((day) => (
        <OperationHoursRow key={day.id} day={day} />
      ))}
    </ul>
  );
};

export default OperationHoursList;
