function acronymBuster(string){
  
  const map  = {
    KPI: "key performance indicators",
    EOD: "the end of the day",
    TBD: "to be decided",
    WAH: "work at home",
    IAM: "in a meeting",
    OOO: "out of office",
    NRN: "no reply necessary",
    CTA: "call to action",
    SWOT: "strengths, weaknesses, opportunities and threats"
  }
  
  let words = string.split(" ")
  
  for(let i = 0 ; i < words.length; i++){
    let w = words[i].replace(/[^A-Z]/g, "");

    if(w.length >= 3 && w === w.toUpperCase()){
      if(!map[w]){
        return w + " is an acronym. I do not like acronyms. Please remove them from your email.";
      }
      
      let punct = words[i].replace(/[A-Z]/g, "");
      words[i] = map[w] + punct;
    }
  }
  
  let res = words.join(" ");

  let sentences = res.split(". ");
  for (let i = 0; i < sentences.length; i++){
    sentences[i] = sentences[i][0].toUpperCase() + sentences[i].slice(1);
  }

  return sentences.join(". ");
}
