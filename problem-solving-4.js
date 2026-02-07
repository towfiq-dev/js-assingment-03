function gonoVote(array) {

  if (Array.isArray(array) === false) {
    return "Invalid";
  }

  let haCount = 0;
  let naCount = 0;

  for (const vote of array) {
    if (vote === "ha") {
      haCount = haCount + 1;
    }
    else if (vote === "na") {
      naCount = naCount + 1;
    }
  }

  if (haCount > naCount) {
    return true;
  }
  else if (haCount === naCount) {
    return "equal";
  } 
  else {
    return false;
  }
}

console.log(gonoVote(["ha", "na", "ha", "na"]));
console.log(gonoVote(["ha", "ha", "ha", "ha"]));
console.log(gonoVote(["na", "na", "na", "na"]));
console.log(gonoVote(["ha", "na", "na"]));
console.log(gonoVote(["ha", "ha", "ha", "na"]));
console.log(gonoVote("ha, na"));
console.log(gonoVote(1234));