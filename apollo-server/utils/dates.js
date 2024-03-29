const moment = require("moment");

const date = new Date();
const START_DATE_DEFAULT = new Date().setDate(date.getDate() - 7);
const END_DATE_DEFAULT = new Date().setDate(date.getDate() + 7);

const validateDates = (startDate, endDate) => {
  startDate = moment(START_DATE_DEFAULT).format("YYYY-MM-DD");
  endDate = moment(END_DATE_DEFAULT).format("YYYY-MM-DD");



  const validatedStartDate = returnValidatedDate(startDate);
  const validatedEndDate = returnValidatedDate(endDate);
	console.log('START', validatedStartDate);
	console.log('END', validatedEndDate);
  if (validatedStartDate === "error" || validatedEndDate === "error") {
    throw new Error(
      "Start and End dates must be valid dates in the format YYYY-MM-DD or the words, today, tomorrow or yesterday"
    );
  }

  if (moment(validatedStartDate) > moment(validatedEndDate)) {
    throw new Error("Start date must be earlier than End date.");
  }
  const dates = {
    startDate: validatedStartDate,
    endDate: validatedEndDate,
  };
  return dates;
};

const returnValidatedDate = (date) => {
  const d = new Date();
  let returnDate = new Date();

  switch (date.toLowerCase()) {
    case "yesterday":
      returnDate.setDate(d.getDate() - 1);
      returnDate = moment(returnDate).format("YYYY-MM-DD").toString();
      break;
    case "today":
      returnDate.setDate(d.getDate());
      returnDate = moment(returnDate).format("YYYY-MM-DD").toString();
      break;
    case "tomorrow":
      returnDate.setDate(d.getDate() + 1);
      returnDate = moment(returnDate).format("YYYY-MM-DD").toString();
      break;
    default:
      if (
        moment(moment(date).format("YYYY-MM-DD"), "YYYY-MM-DD", true).isValid()
      ) {
        returnDate = moment(date).format("YYYY-MM-DD").toString();
      } else {
        returnDate = "error";
      }
  }

  return returnDate;
};

module.exports = validateDates;
