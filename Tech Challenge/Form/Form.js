const ShowPassword = document.querySelector("#show-pass");
const PasswordField = document.querySelector("#pass");

ShowPassword.addEventListener("click", function(){
    this.classList.toggle("show");
    this.classList.toggle("hide-pass", !this.classList.contains("show"));
    const type = PasswordField.getAttribute("type") === "password" ? "text" : "password";
    PasswordField.setAttribute("type", type);
})

const ShowPassword2 = document.querySelector("#show-passc");
const PasswordField2 = document.querySelector("#passc");

ShowPassword2.addEventListener("click", function(){
    this.classList.toggle("show");
    this.classList.toggle("hide-pass", !this.classList.contains("show"));
    const type = PasswordField2.getAttribute("type") === "password" ? "text" : "password";
    PasswordField2.setAttribute("type", type);
})

const pass1 = document.getElementById('pass');
const pass2 = document.getElementById('passc');

function validateName() {
    let inputName = document.querySelector("#name");
    let valueName = inputName.value;
    let errorName = document.querySelector("#error-name");
  
    if (valueName == "") {
      errorName.innerHTML = "Please enter your group name";
      inputName.style.border = "3px solid red";
      return false;
    } else {
      errorName.innerHTML = "";
      inputName.style.border = "3px solid #22539F";
      return true;
    }
}

function validateEmail() {
    let inputEmail = document.querySelector("#email");
    let valueEmail = inputEmail.value;
    let errorEmail = document.querySelector("#error-email");
  
    if (valueEmail == "") {
      errorEmail.innerHTML = "Please enter your email";
      inputEmail.style.border = "3px solid red";
      return false;
    } else if (!valueEmail.includes("@") || !valueEmail.includes(".")) {
        errorEmail.innerHTML = "Please enter a valid email";
        inputEmail.style.border = "3px solid red";
        return false;
    } else {
      errorEmail.innerHTML = "";
      inputEmail.style.border = "3px solid #22539F";
      return true;
    }
}
  
function validatePass() {
    let inputPass = document.querySelector("#pass");
    let valuePass = inputPass.value;
    let errorPass = document.querySelector("#error-pass");
  
    if (valuePass == "") {
      errorPass.innerHTML = "Please enter your password";
      inputPass.style.border = "3px solid red";
      return false;
    } else {
      errorPass.innerHTML = "";
      inputPass.style.border = "3px solid #22539F";
      return true;
    }
}

function validatePassC() {
    let inputPassC = document.querySelector("#passc");
    let valuePassC = inputPassC.value;
    let errorPassC = document.querySelector("#error-passc");
  
    if (valuePassC == "") {
        errorPassC.innerHTML = "Please enter your password confirmation";
        inputPassC.style.border = "3px solid red";
        return false;
    } else if(pass1.value !== pass2.value) {
        errorPassC.innerHTML = "Password is wrong. Please try again";
        inputPassC.style.border = "3px solid red";
        return false;
    } else {
        errorPassC.innerHTML = "";
        inputPassC.style.border = "3px solid #22539F";
        return true;
    }
}

function validateRadio() {
    let radio1 = document.getElementById('dot-1').checked;
    let radio2 = document.getElementById('dot-2').checked;
    let errorRadio = document.querySelector("#error-radio");

    if((radio1 == "" && radio2 == "")){
        errorRadio.innerHTML = "This field is required";
        return false;
    } else {
        errorRadio.innerHTML = "";
        return true;
    }
}
  
let stepBtn = document.querySelector("#submit-button");
stepBtn.addEventListener("click", function (e) {
  
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isPassValid = validatePass();
    let isPassCValid = validatePassC();
    let isRadioValid = validateRadio();
  
    if (
      isNameValid &&
      isEmailValid &&
      isPassValid &&
      isPassCValid &&
      isRadioValid
    ) {

        let registerForm = document.querySelector("#submit-button");
        alert("Form Submitted!");
        registerForm.submit();
      
    }
});