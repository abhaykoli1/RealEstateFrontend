import { useState } from "react";

const generateTimeSlots = (start = "12:00", end = "18:00", interval = 30) => {
  const slots = [];
  let [hours, minutes] = start.split(":").map(Number);
  const [endHours, endMinutes] = end.split(":").map(Number);

  while (hours < endHours || (hours === endHours && minutes <= endMinutes)) {
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}`;
    slots.push(formattedTime);
    minutes += interval;
    if (minutes >= 60) {
      hours += 1;
      minutes = 0;
    }
  }
  return slots;
};

function TimeSlotSelector() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const timeSlots = generateTimeSlots("12:00", "18:00", 30);

  console.log("selectedSlot", selectedSlot);
  return (
    <div className="flex flex-col items-center   overflow-scroll">
      <div className="flex flex-col gap-3 w-full max-w-xs">
        {timeSlots.map((slot) => (
          <div
            key={slot}
            className={`w-full flex items-center justify-center py-3 !border hover:scale-[102%] border-gray-300  !text-black text-lg font-medium rounded-md transition ${
              selectedSlot === slot
                ? "!bg-white text-white"
                : " hover:text-white"
            }`}
            onClick={() => setSelectedSlot(slot)}
          >
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeSlotSelector;
