function solution(string) {

const result = string.split(/(?=[A-Z])/)
return result.join(" ")
}
