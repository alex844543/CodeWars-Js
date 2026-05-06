function solve(st, a, b){
 
  let right = st.slice(0,a)
  let middle = st.slice(a,b+1)
  let left = st.slice(b+1)
  
  let reversed = middle.split("").reverse().join("")
  
  return right + reversed + left ;
  
  
}
  
