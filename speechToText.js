const bot = {
    message(prompt) {
      let splited = prompt.split(" ")
        if(prompt.includes('Add')){
return Number(splited[1]) + Number(splited[3])
        }else if(prompt.includes('Subtract')){
          return  Number(splited[3]) - Number(splited[1])
        }else if (prompt.includes("weather")) {
      let words = prompt.split(" ");
      let time = words[words.length - 1]; 

      let hour = parseInt(time); 

      if (time.includes("pm")) {
        hour = hour + 12;
      }

      if (hour >= 6 && hour <= 18) {
        return "sunny";
      } else {
        return "raining";
      }
    }
  }
    }
;
