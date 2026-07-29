function enough(cap, on, wait) {
let freeSeats = cap-on

  if (wait > freeSeats)  {
    return wait - freeSeats;
  }

  return 0;




}-
