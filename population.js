const select = (population, fitnesses) => {
  
  
  let totalFitness = fitnesses.reduce((a,b) => a + b , 0)
  
  let random =  Math.random() * totalFitness
  let current = 0
  for(let i = 0 ;  i <population.length ; i++){
    current+=fitnesses[i];
    if(current >= random){
      return population[i]
    }
  }
  
};
