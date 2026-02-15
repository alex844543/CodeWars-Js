const toUnderScore = (name) => {
  if (!name) return "";

  let result = "";

  for (let i = 0; i < name.length; i++) {
    let char = name[i];
    let prev = name[i - 1];

    if (char === "_") {
      result += char;
      continue;
    }

    if (
      i > 0 &&
      char >= "A" &&
      char <= "Z" &&
      prev !== "_"
    ) {
      result += "_" + char;
      continue;
    }

    if (
      i > 0 &&
      char >= "0" &&
      char <= "9" &&
      !(prev >= "0" && prev <= "9") &&
      prev !== "_"
    ) {
      result += "_" + char;
      continue;
    }

    result += char;
  }

  return result;
};
