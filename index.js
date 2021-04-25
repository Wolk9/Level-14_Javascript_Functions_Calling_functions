// Functions calling functions: exercise

// Hey Kiddo

// const DoAgeCheck = (age) => {
//   if (age >= 18) {
//     return true;
//   }
//   return false;
// };

// const GreetProperly = (age) => {
//   const IsAdult = DoAgeCheck(age);
//   if (IsAdult == true) {
//     return "Hello Adult";
//   }
//   return "Hey kiddo";
// };

// let HowOld = 17;
// console.log(GreetProperly(HowOld));

// VAT Calculations
// VAT exercise 1

// const CalculateVAT = (BasePrice, HighLowZeroVAT) => {
//   //   console.log(BasePrice);
//   //   console.log(HighLowZeroVAT);
//   if (HighLowZeroVAT == "High") {
//     console.log("Hoge BTW");
//     const VAT = BasePrice * 0.21;
//     return VAT;
//   } else if (HighLowZeroVAT == "Low") {
//     console.log("Lage BTW");
//     const VAT = BasePrice * 0.09;
//     return VAT;
//   } else {
//     console.log("geen BTW");
//     const VAT = 0;
//     return VAT;
//   }
// };

// const CalculateTotal = (BasePrice, HighLowZeroVAT) => {
//   const Total = BasePrice + CalculateVAT(BasePrice, HighLowZeroVAT);
//   return Total;
// };

// console.log(CalculateTotal(2000, "Low"));
// console.log(CalculateTotal(2000, "High"));
// console.log(CalculateTotal(2000, "Zero"));

// VAT Exercise 2

const CalculateVAT = (BasePrice, HighLowZeroVAT) => {
  //   console.log(BasePrice);
  //   console.log(HighLowZeroVAT);
  if (HighLowZeroVAT == "High") {
    // console.log("Hoge BTW");
    const VATHigh = BasePrice * 0.21;
    return VATHigh;
  } else if (HighLowZeroVAT == "Low") {
    // console.log("Lage BTW");
    const VATLow = BasePrice * 0.09;
    return VATLow;
  } else {
    // console.log("geen BTW");
    const VATZero = 0;
    return VATZero;
  }
};

const CalculateTotal = (BasePrice, HighLowZeroVAT) => {
  const Total = BasePrice + CalculateVAT(BasePrice, HighLowZeroVAT);
  const VAT = CalculateVAT(BasePrice, HighLowZeroVAT);
  console.log("---- VAT Calculation -----");
  console.log("€" + BasePrice);
  console.log("€" + VAT + "             " + HighLowZeroVAT + "VAT");
  console.log("_________ +");
  console.log("€" + Total);
  return "--------------------------";
};

console.log(CalculateTotal(2000, "Low"));
console.log(CalculateTotal(2000, "High"));
console.log(CalculateTotal(2000, "Zero"));
