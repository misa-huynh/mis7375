function reviewInput() {
  var formElements = document.getElementById("signup");
  var elements_array = formElements.elements;
  var htmlOutput = `<div class="review-container">
  <h2>Review your information</h2>
  <table class="review-table">
  <th style="width:30%">`;

  for (var position = 0; position < elements_array.length; position++) {
    var element = elements_array[position];
    var value = elements_array[position].value;
    var name = elements_array[position].name;
    var dataType = elements_array[position].type;
    if (name == "user") {
      value = value.toLowerCase();
    }

    if (name == "submit") {
      continue;
    }
    if (name == "clear") {
      continue;
    }
    if (name == "review") {
      continue;
    }
    if (dataType == "checkbox") {
      if (element.checked) {
        htmlOutput += "<tr><td align='right'>" + name + "</td>";
        htmlOutput += "<td class='outputdata'>" + value + "</td></tr>";
      }
      continue;
    } else if (dataType == "radio") {
      if (element.checked) {
        htmlOutput += "<tr><td align='right'>" + name + "</td>";
        htmlOutput += "<td class='outputdata'>" + value + "</td></tr>";
      }
      continue;
    } else {
      htmlOutput += "<tr><td align='right'>" + name + "</td>";
      htmlOutput += "<td class='outputdata'>" + value + "</td></tr>";
    }
  }
  htmlOutput += "</table>";
  document.getElementById("showReview").innerHTML = htmlOutput;
}

var testRegex = "^[A-Za-z]+(?:[\\s\\'-][A-Za-z]+)*$";

function fNameValidation() {
  let valid = true;
  var fname = document.getElementById("fname");
  var fnameValue = fname.value;
  var pattern = /^[A-Za-z]+(?:[\\s\\'-][A-Za-z]+)*$/;
  var errorOutput = "";
  // If does not match regular expression
  if (!fnameValue.match(pattern)) {
    errorOutput =
      "<span style=color:red>Max 30 characters. No special characters. No numbers.</span>";
    valid = false;
  }

  document.getElementById("error-fname").innerHTML = errorOutput;
  return valid;
}
function middleinitalValidation() {
  let valid = true;
  var middleinital = document.getElementById("middleinital");
  var middleinitalValue = middleinital.value;
  var pattern = /^[a-zA-Z]{1}$/;
  var errorOutput = "";
  // If does not match regular expression
  if (!middleinitalValue.match(pattern) && middleinitalValue != "") {
    errorOutput =
      "<span style=color:red>Max 1 character. No special characters. No numbers.</span>";
    valid = false;
  }

  document.getElementById("error-middleinital").innerHTML = errorOutput;
  return valid;
}

function lNameValidation() {
  let valid = true;
  var lname = document.getElementById("lname");
  var lnameValue = lname.value;
  var pattern = /^[a-zA-Z2-5'-]+$/;
  var errorOutput = "";
  // If does not match regular expression
  if (!lnameValue.match(pattern)) {
    errorOutput =
      "<span style=color:red>Max 30 characters. No special characters. No numbers.</span>";
    valid = false;
  }

  document.getElementById("error-lname").innerHTML = errorOutput;
  return valid;
}

function birthdateValidation() {
  let valid = true;
  var birthdate = document.getElementById("birthdate");
  var birthdateValue = birthdate.value;
  const currentDateUTC = new Date().toISOString().slice(0, 10);

  const currentCentralDate = currentDateUTC.toLocaleString("en-US", {
    timeZone: "America/Chicago",
  });

  const pastDate = new Date(currentCentralDate);

  // Subtract 120 years
  pastDate.setFullYear(pastDate.getFullYear() - 120);
  prevDate = pastDate.toISOString().split("T")[0];

  var errorOutput = "";
  // If the currentDate is less than the dob selected
  if (currentCentralDate < birthdateValue || prevDate > birthdateValue) {
    errorOutput =
      "<span style=color:red>Enter valid Date of Birth. No future or more than 120 years ago.</span>";
    valid = false;
  }

  document.getElementById("error-birthdate").innerHTML = errorOutput;
  return valid;
}

function ssValidation() {
  let valid = true;
  var ss = document.getElementById("ss");
  var ssValue = ss.value;
  var pattern = /^\d{3}\d{2}\d{4}$/;
  var errorOutput = "";
  // If does not match regular expression
  if (!ssValue.match(pattern)) {
    errorOutput =
      "<span style=color:red>Enter your 9 Digit Social Secruity. XXXXXXXXX Format.</span>";
    valid = false;
  }

  document.getElementById("error-ss").innerHTML = errorOutput;
  return valid;
}

function address1Validation() {
  let valid = true;
  var address1 = document.getElementById("address1");
  var address1Value = address1.value;
  var pattern = /\d{1,}[a-zA-Z0-9\s]+/;
  var errorOutput = "";
  // If does not match regular expression
  if (!address1Value.match(pattern)) {
    errorOutput =
      "<span style=color:red>Max 30 characters. No special characters. At least 1 number.</span>";
    valid = false;
  }

  document.getElementById("error-address1").innerHTML = errorOutput;
  return valid;
}

// Validation will check if address to has value if does, run validation, else return true.
function address2Validation() {
  let valid = true;
  var address2 = document.getElementById("address2");
  var address2Value = address2.value;
  if (address2Value === "") {
    return true;
  }
  var pattern = /\d{1,}[a-zA-Z0-9\s]+/;
  var errorOutput = "";
  // If does not match regular expression
  if (!address2Value.match(pattern)) {
    errorOutput =
      "<span style=color:red>Max 30 characters. No special characters. At least 1 number.</span>";
    valid = false;
  }

  document.getElementById("error-address2").innerHTML = errorOutput;
  return valid;
}

function cityValidation() {
  let valid = true;
  var city = document.getElementById("city");
  var cityValue = city.value;
  var pattern = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
  var errorOutput = "";
  // If does not match regular expression
  if (!cityValue.match(pattern)) {
    errorOutput =
      "<span style=color:red>Max 30 characters. No special characters. No numbers.</span>";
    valid = false;
  }

  document.getElementById("error-city").innerHTML = errorOutput;
  return valid;
}

function stateValidation() {
  let valid = true;
  var state = document.getElementById("state");
  var stateValue = state.value;
  var errorOutput = "";
  // If does not match regular expression
  if (stateValue == "") {
    errorOutput = "<span style=color:red>Select a State</span>";
    valid = false;
  }

  document.getElementById("error-state").innerHTML = errorOutput;
  return valid;
}

function zipcodeValidation() {
  let valid = true;
  var zipcode = document.getElementById("zipcode");
  var zipcodeValue = zipcode.value;
  var pattern = /^\d{5}(?:-?\d{4})?$/;
  var errorOutput = "";
  // If does not match regular exprezipcodeion
  if (!zipcodeValue.match(pattern)) {
    errorOutput = "<span style=color:red>Format as xxxxx OR xxxxx-xxxx</span>";
    valid = false;
  }

  document.getElementById("error-zipcode").innerHTML = errorOutput;
  return valid;
}

function emailValidation() {
  let valid = true;
  var email = document.getElementById("email");
  var emailValue = email.value;
  var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var errorOutput = "";
  // If does not match regular expression
  if (!emailValue.match(pattern)) {
    errorOutput = "<span style=color:red>Format as example@example.com</span>";
    valid = false;
  }

  document.getElementById("error-email").innerHTML = errorOutput;
  return valid;
}

function phoneValidation() {
  let valid = true;
  var phone = document.getElementById("phone");
  var phoneValue = phone.value;
  var pattern = /\d{1,}[a-zA-Z0-9\s]+/;
  var errorOutput = "";
  // If does not match regular expression
  if (!phoneValue.match(pattern)) {
    errorOutput = "<span style=color:red>Format as 000-000-0000</span>";
    valid = false;
  }

  document.getElementById("error-phone").innerHTML = errorOutput;
  return valid;
}

function userValidation() {
  let valid = true;
  var user = document.getElementById("user");
  var userValue = user.value;
  var pattern = /^[a-zA-Z_-][a-zA-Z0-9_-]{4,19}$/;
  var errorOutput = "";
  // If does not match regular expression
  if (!userValue.match(pattern)) {
    errorOutput =
      "<span style=color:red>5-30 characters. No special characters. No first character as number. No spaces.</span>";
    valid = false;
  }

  document.getElementById("error-user").innerHTML = errorOutput;
  return valid;
}

function password1Validation() {
  let valid = true;
  var password1 = document.getElementById("password1");
  var username = document.getElementById("user");

  var usernameValue = username.value;
  var password1Value = password1.value;
  var pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
  var errorOutput = "";

  // If does not match regular expression
  if (!password1Value.match(pattern)) {
    errorOutput =
      "<span style=color:red>Must have at least 8 characters and no more than 30 characters long and contain at least 1 upper case latter, 1 number and 1 special character..</span>";
    valid = false;
  }

  if (
    password1Value != "" &&
    (password1Value == usernameValue || password1Value.includes(usernameValue))
  ) {
    errorOutput =
      "<span style=color:red>Password cannot match or include Username.</span>";
    valid = false;
  }

  document.getElementById("error-password1").innerHTML = errorOutput;
  return valid;
}

function password2Validation() {
  let valid = true;
  var password2 = document.getElementById("password2");
  var password2Value = password2.value;
  var password1 = document.getElementById("password1");
  var password1Value = password1.value;
  var pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
  var errorOutput = "";
  // If does not match regular expression
  if (!password2Value.match(pattern)) {
    errorOutput = "<span style=color:red>Re-enter your Password</span>";
    valid = false;
  }

  if (password1Value != password2Value) {
    errorOutput = "<span style=color:red>Passwords does not match.</span>";
    valid = false;
  }

  document.getElementById("error-password2").innerHTML = errorOutput;
  return valid;
}

function updateRangeValue() {
  let valid = true;
  var wellness = document.getElementById("wellness");
  var wellnessValue = wellness.value;

  var htmlOutput = "<p class=slider-font>" + wellnessValue + "</p>";
  //  <p>wellnessValue</p>

  document.getElementById("wellness-result").innerHTML = htmlOutput;
  return valid;
}

function genderValidation() {
  let valid = true;
  var radios = document.getElementsByName("Gender");
  var isGenderChecked = false;
  var errorOutput = "";

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      isGenderChecked = true;
      break;
    }
  }

  if (isGenderChecked == false) {
    errorOutput = "<span style=color:red>Select a gender.</span>";
    valid = false;
  }
  document.getElementById("error-gender").innerHTML = errorOutput;
  return valid;
}

function maritalValidation() {
  let valid = true;
  var radios = document.getElementsByName("Marital Status");
  var isMaritalChecked = false;
  var errorOutput = "";

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      isMaritalChecked = true;
      break;
    }
  }

  if (isMaritalChecked == false) {
    errorOutput = "<span style=color:red>Select a marital status.</span>";
    valid = false;
  }
  document.getElementById("error-marital").innerHTML = errorOutput;
  return valid;
}

function vaccinatedValidation() {
  let valid = true;
  var radios = document.getElementsByName("Vaccination Status");
  var isVaccinatedChecked = false;
  var errorOutput = "";

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      isVaccinatedChecked = true;
      break;
    }
  }

  if (isVaccinatedChecked == false) {
    errorOutput = "<span style=color:red>Select an option.</span>";
    valid = false;
  }
  document.getElementById("error-vaccinated").innerHTML = errorOutput;
  return valid;
}

function checkAllValidation() {
  let listOfErrorMessages = "";
  if (fNameValidation() === false) {
    listOfErrorMessages += "\nInvalid First Name";
  }
  if (middleinitalValidation() === false) {
    listOfErrorMessages += "\nInvalid Middle Inital";
  }
  if (lNameValidation() === false) {
    listOfErrorMessages += "\nInvalid Last Name";
  }
  if (birthdateValidation() === false) {
    listOfErrorMessages += "\nInvalid Date of Birth";
  }
  if (ssValidation() === false) {
    listOfErrorMessages += "\nInvalid Social Security";
  }
  if (address1Validation() === false) {
    listOfErrorMessages += "\nInvalid Address 1";
  }
  if (address2Validation() === false) {
    listOfErrorMessages += "\nInvalid Address 2";
  }
  if (cityValidation() === false) {
    listOfErrorMessages += "\nInvalid City";
  }
  if (stateValidation() === false) {
    listOfErrorMessages += "\nInvalid State";
  }
  if (zipcodeValidation() === false) {
    listOfErrorMessages += "\nInvalid Zip Code";
  }
  if (emailValidation() === false) {
    listOfErrorMessages += "\nInvalid Email";
  }
  if (password2Validation() === false) {
    listOfErrorMessages += "\nInvalid Password";
  }
  if (password1Validation() === false) {
    listOfErrorMessages += "\nInvalid Password 2";
  }
  if (userValidation() === false) {
    listOfErrorMessages += "\nInvalid User";
  }
  if (phoneValidation() === false) {
    listOfErrorMessages += "\nInvalid Phone";
  }
  if (genderValidation() === false) {
    listOfErrorMessages += "\nInvalid Gender";
  }
  if (maritalValidation() === false) {
    listOfErrorMessages += "\nInvalid Marital Status";
  }
  if (vaccinatedValidation() === false) {
    listOfErrorMessages += "\nVaccination Status Not Founded";
  }
  return listOfErrorMessages;
}

function forceEmailLower() {
  const emailHTML = document.getElementById("email");
  let emailValue = email.value;
  emailHTML.value = emailValue.toLowerCase();
}

function handleValidateButton() {
  let listOfErrorMessages = checkAllValidation();
  forceEmailLower();
  if (listOfErrorMessages !== "") {
    alert(listOfErrorMessages);
  } else {
    enableSubmitButton();
  }
}
// TODO: add submit check!
function enableSubmitButton() {
  let submitButton = document.getElementById("submit");
  submitButton.removeAttribute("disabled");
}
