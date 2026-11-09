function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  
let month = birthday.toLocaleString('default', { month: 'long' });
let date = birthday.getDate().toString();
  let monthNumber = new Date(`${month} 1, 2026`).getMonth() + 1;
  
if(date.length > 1){
  let spt = date.split("")
  date = spt[1]
}
  
  date = Number(date)
  
  return 'The'+" "+ m[monthNumber-1] + " "+ d[date]


}
