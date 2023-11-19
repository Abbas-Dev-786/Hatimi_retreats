const generateTimeSlots = function (openingTime, closingTime) {
  const allTimeSlots = [];
  const startTime = new Date();
  const endTime = new Date();
  startTime.setHours(openingTime.getHours(), openingTime.getMinutes(), 0, 0);
  endTime.setHours(closingTime.getHours(), closingTime.getMinutes(), 59, 999);

  for (
    let time = startTime.getTime();
    time <= endTime.getTime();
    time += 60 * 60 * 1000
  ) {
    allTimeSlots.push({
      startTime: new Date(time),
      endTime: new Date(time + 60 * 60 * 1000),
    });
  }

  return allTimeSlots;
};

module.exports = generateTimeSlots;
