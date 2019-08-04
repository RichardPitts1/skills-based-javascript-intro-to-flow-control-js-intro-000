function basicTeenager(age) {
  if (age >= 13 && age <=19) {
    return "You are a teenager!"
  } else {
    return undefined;
  }
}
// console.log(basicTeenager(13))
// console.log(basicTeenager(19))
// console.log(basicTeenager(20))
// console.log(basicTeenager(12))
function teenager(age) {
  if (age >= 13 && age <=19) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age >= 13 && age <=19) {
    return "You are a teenager!"
  } else if (age <= 13) {
    return "You are a kid";
  } else if (age >= 19) {
    return "You are a grownup";
  } else {
    return "Right"
  }
}


function ternaryTeenager(age) {
  return (age >= 13 && age <=19) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age) {
    case (age >= 13 && age <= 19):
      return "You are a teenager";
    case (age < 13 || age > 19): 
        return "You have an age";
  }
}
console.log(switchAge(12));
