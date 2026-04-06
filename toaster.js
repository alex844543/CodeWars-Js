function toaster(b){
b=b.toLowerCase()
if(b=="white bread")return"1 min"
if(b=="frozen white bread")return"1.5 mins"
if(b=="brown bread")return"2 mins"
return b=="frozen brown bread"?"3 mins":"Please do not put that in the toaster!"
}
