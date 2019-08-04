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
    return "You are not a teenager!";
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





  describe('ageChecker', () => {
    it('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(ageChecker(13)).toEqual("You are a teenager!")
    })

    it('should return "You are a kid" if the age is 12 or below', () => {
      expect(ageChecker(12)).toEqual("You are a kid")
    })

    it('should return "You are a grownup" if the age is 20 or above', () => {
      expect(ageChecker(29)).toEqual("You are a grownup")
    })
  })











function ternaryTeenager(age) {

}

function switchAge(age) {

}
