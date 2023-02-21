function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // Email validation
  if (email === '' ) {
    alert('Please enter email and password.');
    return false;
  }
  
  if (email.indexOf(" ") >= 0) {
    alert("Email should not contain spaces");
    return false;
  }
  if (email.indexOf("@") < 0) {
    alert("Email should include the @");
    return false;
  }
  if (email.indexOf(".com") < 0) {
    alert("Email should include .com at the end");
    return false;
  }
  if (email.match(/[^a-zA-Z0-9@.]/g)) {
    alert("Email should not include punctuation marks except @ and .");
    return false;
  }

  // Password validation
  if (!password.match(/[a-z]/g) || !password.match(/[A-Z]/g)) {
    alert("Password should include both uppercase and lowercase letters");
    return false;
  }
  if (!password.match(/[!@#$%^&*(),.?":{}|<>]/g)) {
    alert("Password should include at least one punctuation mark");
    return false;
  }
  if (password.length < 8) {
    alert("Password should be at least 8 characters long");
    return false;
  }

  return true;
}
