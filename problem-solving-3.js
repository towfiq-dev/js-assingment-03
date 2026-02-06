function finalScore(omr){
if (typeof omr !== "object" || omr === null || Array.isArray(omr)) {
    return "Invalid";
  }

  const rightCount = omr.right;
  const wrongCount = omr.wrong;
  const skipCount = omr.skip;

  const totalQuestions = rightCount + wrongCount + skipCount;

  if (totalQuestions !== 100) {
    return "Invalid";
  }

  const score = (rightCount * 1) - (wrongCount * 0.5);

  return Math.round(score);
}

console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
console.log(finalScore("!@#"));
console.log(finalScore(['Raj']));