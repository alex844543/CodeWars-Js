function backToTheFuture(str) {

  let [dayName, date, month] = str.split(" ");
  date = Number(date);

  const matches = {
    "January": ["October"],
    "October": ["January"],
    "April": ["July"],
    "July": ["April"],
    "September": ["December"],
    "December": ["September"],
    "February": ["March", "November"],
    "March": ["February", "November"],
    "November": ["February", "March"]
  };

  const monthDays = {
    "January": 31, "February": 28, "March": 31, "April": 30,
    "May": 31, "June": 30, "July": 31, "August": 31,
    "September": 30, "October": 31, "November": 30, "December": 31
  };

  if (!matches[month]) return "Doc, I can't get back to the future!";

  const options = matches[month];

  const order = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  for (let m of order) {
    if (options.includes(m)) {
      if (date > monthDays[m]) continue;

      const originalMonthIndex = order.indexOf(month);
      const targetMonthIndex = order.indexOf(m);
      const totalDaysBetween = calculateDaysBetween(originalMonthIndex, targetMonthIndex);

      if ((getDayNumber(dayName) + totalDaysBetween) % 7 === getDayNumber(dayName)) {
        return `I'm leaving here on ${dayName} ${date} ${m}!`;
      }
    }
  }

  return "Doc, I can't get back to the future!";

  function getDayNumber(day) {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days.indexOf(day);
  }

  function calculateDaysBetween(startIndex, endIndex) {
    const daysInMonthArray = [
      31,28,31,30,31,30,31,31,30,31,30,31
    ];
    let total = 0;
    let i = startIndex;
    while (i !== endIndex) {
      total += daysInMonthArray[i];
      i = (i + 1) % 12;
    }
    return total;
  }

}
