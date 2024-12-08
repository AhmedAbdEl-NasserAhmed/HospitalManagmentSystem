export function generateDoctorSchedule(
  startTime: string,
  endTime: string,
  intervalMinutes: number
) {
  const schedule = [];
  let currentTime = new Date(`2024-12-05T${startTime}:00`);

  const endTimeObj = new Date(`2024-12-05T${endTime}:00`);

  let id = 1;

  while (currentTime <= endTimeObj) {
    schedule.push({
      id: id++,

      option: currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      }),
      value: currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      })
    });

    currentTime.setMinutes(currentTime.getMinutes() + intervalMinutes);
  }

  return schedule;
}

export const isWithinRange = (time: string) => {
  const [hours, minutes, period] = time.split(/[: ]/);
  const totalMinutes =
    (parseInt(hours, 10) % 12) * 60 +
    parseInt(minutes, 10) +
    (period === "PM" ? 720 : 0);

  const startMinutes = 9 * 60;
  const endMinutes = 17 * 60;

  return totalMinutes >= startMinutes && totalMinutes <= endMinutes;
};

export function convertToISO(timeStr: any) {
  const [time, period] = timeStr.split(" ");

  let [hours, minutes] = time.split(":");

  hours = parseInt(hours);
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  return `1970-01-01T${String(hours).padStart(2, "0")}:${minutes}:00`;
}
