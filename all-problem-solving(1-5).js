//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  }

  if (discount < 0 || discount > 100) {
    return "Invalid";
  }

  const discountAmount = (currentPrice * discount) / 100;
  const priceAfterDiscount = currentPrice - discountAmount;
  const result = priceAfterDiscount.toFixed(3);
  
  return result;
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  const isNotString = typeof otp !== "string";

  if (isNotString === true) {
    return "Invalid";
  }

  if(otp.length === 8 && otp.startsWith("ph-")){
    return true
  }
  else {
    return false;
  }
}

//Problem-03: BCS Final Score Calculator
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

//Problem-04: Upcoming Gono Vote
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

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
  const isNotString = typeof str !== "string";
  if (isNotString === true) {
    return "Invalid";
  }

  const trimmedString = str.trim();
  const isEmpty = trimmedString.length === 0;
  if (isEmpty === true) {
    return "Invalid";
  }

  const wordsArrayForToken = str.split(" ");
  const combinedString = wordsArrayForToken.join("");
  const characterCount = combinedString.length;

  const allWords = str.split(" ");
  let biggestWord = allWords[0];

  for (const currentWord of allWords) {
    const currentWordLength = currentWord.length;
    const biggestWordLength = biggestWord.length;

    if (currentWordLength > biggestWordLength) {
      biggestWord = currentWord;
    }
  }

  const finalResult = {
    longwords: biggestWord,
    token: characterCount
  };

  return finalResult;
}