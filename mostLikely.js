function mostLikely(prob1,prob2){

let a1 = prob1.split(":").map(Number)
let a2 = prob2.split(":").map(Number)

let a = a1[0] / (a1[0] + a1[1])

let b = a2[0] / (a2[0] + a2[1])

  return a > b

}
