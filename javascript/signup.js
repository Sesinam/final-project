function sign() {
  document.getElementById("myForm").style.display='inline-block';
}
  
function logUserIn() {
  document.getElementById("myform").style.display='inline-block';
}
  
function openFormUp() {
  document.getElementById("myForm").style.display='inline-block';
  document.getElementById('myform').style.display = "none";
}
  
function openformUp() {
  document.getElementById("myForm").style.display='none';
  document.getElementById('myform').style.display = "inline-block";
}
  
// closing form 
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
  
function closeform() {
  document.getElementById("myform").style.display = "none";
}
  
// form validation, showing texts on user action in filling form
// getting input objects in the form
  
var username = document.forms["vForm"]["name"];
var email = document.forms["vForm"]["email"];
var password = document.forms["vForm"]["password"];
var rePassword = document.forms["vForm"]["rePassword"];
  
var nameEmail = document.forms["vform"]["name"];
var passWord = document.forms["vform"]["password"];
  
// getting error display messages
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');
var pass_error = document.getElementById('pass_error');
var password_match = document.getElementById('password_match')
  
var login_error = document.getElementById('login_error');
var nameError = document.getElementById('nameError');
var passwordError = document.getElementById('passwordError');
  
// setting event listeners for sign up form
  
// username validation
username.addEventListener('blur', function() {
  if(username.value == ""){
    username.style.border = "1px solid red";
    name_error.style.display = "block";
  }else {
    username.style.border = "1px solid grey";
    name_error.style.display = "none";
  }
})
  
// email validation
email.addEventListener('blur', function() {
  if(email.value == ""){
    email.style.border = "1px solid red";
    email_error.style.display = "block";
  }else {
    email.style.border = "1px solid grey";
    email_error.style.display = "none";
  }
})
  
// password validation
password.addEventListener('blur', function() {
  if(password.value == ""){
    password.style.border = "1px solid red";
    password_error.style.display = "block";
  }else {
    password.style.border = "1px solid grey";
    password_error.style.display = "none";
  }
})
  
// confirm password validation
rePassword.addEventListener('blur', function() {
  if(rePassword.value == ""){
    rePassword.style.border = "1px solid red";
    pass_error.style.display = "block";
  }else {
    rePassword.style.border = "1px solid grey";
    pass_error.style.display = "none";
  }
})
  
// ensuring both passwords match on form submit
function Validate() {
  // check if the passwords match
  if(password.value != rePassword.value){
    password.style.border = "1px solid red";
    rePassword.style.border = "1px solid red";
    password_match.style.display = "block";
    return false;
  }else {
    password.style.border = "1px solid grey";
    rePassword.style.border = "1px solid grey";
    password_match.style.display = "none";
  }
}
  
// setting event listeners for login form
// username or email validation
nameEmail.addEventListener('blur', function() {
  if(nameEmail.value == ""){
    nameEmail.style.border = "1px solid red";
    nameError.style.display = "block";
  }else {
    nameEmail.style.border = "1px solid grey";
    nameError.style.display = "none";
  }
})
  
// password validation
passWord.addEventListener('blur', function() {
  if(passWord.value == ""){
    passWord.style.border = "1px solid red";
    passwordError.style.display = "block";
  }else {
    passWord.style.border = "1px solid grey";
    passwordError.style.display = "none";
  }
})
  
// storing user details to local storage on sign up
document.getElementById('Submit').addEventListener("click",
  function() {
    var user = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;
    var mail = document.getElementById('email').value;
    let userInfo = [
      {
        userId :username,
        userPassword : pass,
        userEmail : mail
      },
    ];
    userInfo.push(user);
    userInfo.push(pass);
    userInfo.push(mail);
    localStorage.clear();
    localStorage.setItem('username', userInfo[1]);
    localStorage.setItem('password',userInfo[2]);
    localStorage.setItem('email', userInfo[3]);
  }
);
  
  
// giving user access on log in validation
document.getElementById('submit').addEventListener("click", 
  function validate() {
    // check if username or password entered is what exists on file
    var user1 = document.getElementById('nameEmail').value;
    var Password = document.getElementById('password').value;
    var userid = localStorage.getItem('username');
    var passwordid = localStorage.getItem('password');
    var emailid = localStorage.getItem('email');
    if(user1 != userid || user1 != emailid  && Password != passwordid){
      nameEmail.style.border = "1px solid red";
      passWord.style.border = "1px solid red";
      login_error.style.display = "block";
      return false;
    }else {
      nameEmail.style.border = "1px solid grey";
      passWord.style.border = "1px solid grey";
      login_error.style.display = "none";  
    }
  }
)
  

// disabling book button on appointment form until user logs in
document.getElementById('userBook').addEventListener('blur', function() {
  var user = localStorage.getItem('username');
  var defaultUsername = document.getElementById('username').textContent;
  if(defaultUsername == user) {
    document.getElementById('book').disabled = false;
  }else{
    document.getElementById('book').disabled = true;
    alert("kindly sign up to access service");
  } 
})

// filling out appointment list
function addAppointment(x) {

  // gathering values of objects in appointment form
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  var service = document.getElementById('service').value;
  var venue = document.getElementById('partner').value;
 
  // adding new row to table on click
  var tableRef = document.getElementsById(x);
  var newRow = tableRef.insertRow(1);
 
  // adding cells to row
  var addDateTime = newRow.insertCell(0);
  var addService = newRow.insertCell(1);
  var addVenue = newRow.insertCell(2);
  // appending innerHTML of each cell
  let newText1 = document.createTextNode(date + " " + time);
  addDateTime.appendChild(newText1);
  let newText2 = document.createTextNode(service);
  addService.appendChild(newText2);
  let newText3 = document.createTextNode(venue);
  addVenue.appendChild(newText3);
  alert("your appointment has been booked successfully");
}

