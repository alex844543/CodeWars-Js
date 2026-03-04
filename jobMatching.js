function match(candidate, job) {

let max  = job.maxSalary
let min = candidate.minSalary

if(!candidate || min == null){
  throw new Error("Candidate minimun salary is required")
}
  if(!job || max == null){
    throw new Error('Job Maximum salary is required')
  }
  
  let adjustMin = min *  0.9
  
  return adjustMin <= max

}
