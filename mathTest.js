function mathTest(buildingStr, question) {

  const grid = buildingStr
    .split('\n')
    .filter(line => line.includes('|'))
    .map(line =>
      line
        .split('|')
        .map(x => x.trim())
        .filter(x => /^[A-Za-z]+$/.test(x))
    )
    .filter(row => row.length === 3);

  return question.split('\n').map(line => {
    if (!line.trim()) return line;

    const nameMatch = line.match(/^(\w+):/);
    const dirMatch = line.match(/my (\w+) neighbor/i);

    if (!nameMatch || !dirMatch) return line;

    const person = nameMatch[1];
    const direction = dirMatch[1].toLowerCase();

    let r = -1, c = -1;

    // Find coordinates
    for (let i = 0; i < 3; i++) {
      let j = grid[i].indexOf(person);
      if (j !== -1) {
        r = i;
        c = j;
        break;
      }
    }

    let nr = r, nc = c;

    if (direction === "left") nc--;
    else if (direction === "right") nc++;
    else if (direction === "upstairs") nr--;
    else if (direction === "downstairs") nr++;

    const result =
      (nr >= 0 && nr < 3 && nc >= 0 && nc < 3)
        ? grid[nr][nc]
        : "nobody";

    return line.replace("(?)", `(${result})`);

  }).join('\n');
}
