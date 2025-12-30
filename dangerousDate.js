function nextFiveDays(date) {
  let result = [];
  let current = new Date(date);

  for (let i = 0; i < 5; i++) {
    current.setDate(current.getDate() + 1);

    let month = current.getMonth() + 1;
    let day = current.getDate();
    let year = current.getFullYear();

    result.push(`${month}/${day}/${year}`);
  }

  return result.join(", ");
}
