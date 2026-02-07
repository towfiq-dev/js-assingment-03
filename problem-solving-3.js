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
  const rightScore = rightCount * 1;
  const wrongScore = wrongCount * 0.5;
  const skipScore = skipCount * 0;

  const score = rightScore - (wrongScore + skipScore);

  const roundScore = Math.round(score)

  return roundScore;
}

console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
console.log(finalScore({ right: 50, wrong: 10, skip: 40 }));
console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
console.log(finalScore({ right: 100, wrong: 0, skip: 0 }));
console.log(finalScore({ right: 0, wrong: 100, skip: 0 }));
console.log(finalScore({ right: 0, wrong: 0, skip: 100 }));
console.log(finalScore("!@#"));
console.log(finalScore(['Raj']));