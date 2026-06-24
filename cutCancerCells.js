function cutCancerCells(organism) {
  
  return organism.replace(/[a-z]?C[a-z]?|c/g, match =>
                          
    match.replace(/[a-zCc]/g, '')
  );
}
