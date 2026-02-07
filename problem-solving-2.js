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
console.log(validOtp("ph-10985"));
console.log(validOtp("ph-100985"));
console.log(validOtp("ph-1234"));
console.log(validOtp("abc-12345"));
console.log(validOtp(["ph-10985"]));
console.log(validOtp(["ph-109850"]));
console.log(validOtp(12345678));