/** @format */

export function nameValidate(name) {
  if (!name.length) {
    return {
      success: false,
      message: "Must be name",
    };
  } else if (name.length < 3) {
    return {
      success: false,
      message: "Name's length can't be less 3 simvol",
    };
  } else if (name.length > 10) {
    return {
      success: false,
      message: "Name's length can't be more 10 simvol",
    };
  } else {
    return {
      success: true,
      message: "Successfully",
    };
  }
}

export function surnameValidate(surname) {
  if (!surname) {
    return {
      success: false,
      message: "Must be surname",
    };
  } else if (surname.length < 5) {
    return {
      success: false,
      message: "Surname's length can't be less 5 simvol",
    };
  } else if (surname.length > 15) {
    return {
      success: false,
      message: "Surname's length can't be more 15 simvol",
    };
  } else {
    return {
      success: true,
      message: "Successfully",
    };
  }
}

export function passwrodValidate(password) {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let checkNumber = false;
  let checkUpperCase = false;
  let checkLowerCase = false;
  if (!password) {
    return {
      success: false,
      message: "Must be password",
    };
  } else if (password.length < 8) {
    return {
      success: false,
      message: "Password length can't be less 8 simvol",
    };
  } else if (password.length > 15) {
    return {
      success: false,
      message: "Password length can't be more 15 simvol",
    };
  }

  for (let i = 0; i < password.length; i++) {
    if (numbers.includes(+password[i])) {
      checkNumber = true;
      continue;
    }
    if (password[i] == password[i].toLocaleUpperCase()) {
      checkUpperCase = true;
    }
    if (password[i] == password[i].toLocaleLowerCase()) {
      checkLowerCase = true;
    }
  }

  if (checkNumber && checkLowerCase && checkUpperCase) {
    return {
      success: true,
      message: "Successfully",
    };
  } else {
    return {
      success: false,
      message: "Min 1 lover letr min 1 upper letr min 1 number in Password",
    };
  }
}

export function repeatPasswordValidate(password, repeatPassword) {
  if (password === repeatPassword) {
    return {
      success: true,
      message: "Successfully",
    };
  } else {
    return {
      success: false,
      message: "Repeat password don't eqaul password",
    };
  }
}
