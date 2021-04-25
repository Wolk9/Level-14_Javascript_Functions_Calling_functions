// Functions calling functions: exercise

// Hey Kiddo

const DoAgeCheck = (age) => {
  if (age >= 18) {
    return true;
  }
  return false;
};

const GreetProperly = (age) => {
  const IsAdult = DoAgeCheck(age);
  if (IsAdult == true) {
    return "Hello Adult";
  }
  return "Hey kiddo";
};

let HowOld = 17;
console.log(GreetProperly(HowOld));
