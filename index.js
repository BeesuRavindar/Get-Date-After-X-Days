const addDays = require("date-fns/addDays");

function dateAfterXDays(days) {
  let newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
}

module.exports = dateAfterXDays;
