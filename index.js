function distanceFromHqInBlocks(value) {
    if (value > 42){
      return value - 42;
    }
  else{
    return 42 - value;
  }
  }
  function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value)*264;
  }
  function distanceTraveLLedInFeet(start, destination) {
    return Math.abs((destination - start)*264);
  }
  function calculatesFarePrice(start, destination) {
    if (distanceTraveLLedInFeet(start, destination)<400){
      return 0;
    }
    else if ((distanceTraveLLedInFeet(start, destination)-400)*0.02);{
  }
  elseif(distanceTraveLLedInFeet(start, destination)>2500);{
  return 'cannot travel that far';
  }
     else {
    return 25;
  }
  }