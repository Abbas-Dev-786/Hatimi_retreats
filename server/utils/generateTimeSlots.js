const moment = require("moment");

const mergeDateAndTime = (date, time) => {
  const dateMoment = moment(new Date(date), "DD MMMM YYYY");
  const timeMoment = moment(new Date(time), "hh:mm:ss");

  const combinedMoment = dateMoment.set({
    hour: timeMoment.hours(),
    minute: timeMoment.minutes(),
    second: timeMoment.seconds(),
  });

  // // Format the result as a string
  const resultString = combinedMoment.format("DD MMMM YYYY HH:mm:ss");
  return resultString.includes("Invalid") ? "" : new Date(resultString);
};

const generateTimeSlots = function (openingTime, closingTime, date) {
  const allTimeSlots = [];
  const startTime = new Date();
  const endTime = new Date();
  const gap = 60 * 60 * 1000;

  startTime.setHours(openingTime.getHours(), openingTime.getMinutes(), 0, 0);
  endTime.setHours(closingTime.getHours(), closingTime.getMinutes(), 59, 999);

  for (let time = startTime.getTime(); time <= endTime.getTime(); time += gap) {
    allTimeSlots.push({
      startTime: mergeDateAndTime(date, time),
      endTime: mergeDateAndTime(date, time + gap),
    });
  }

  return allTimeSlots;
};

module.exports = generateTimeSlots;
