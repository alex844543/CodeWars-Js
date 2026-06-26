function lineupStudents(students){


let sortt = students.split(" ").sort((a,b) => b.length - a.length || b.localeCompare(a))
return sortt

}
