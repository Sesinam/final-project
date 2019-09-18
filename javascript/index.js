// setting the page to go to top on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  document.title = "Medconnect|Home";
}

// changing the page title 
function titleChange() {
  document.title = "MedConnect|About";
};

function titleChanges() {
  document.title= "MedConnect|Contact Us";
};

// setting background image to slide
var backImage = ['../assets/safsie2.jpeg', '../assets/safsie3.jpeg', '../assets/safsie4.jpg'];
  
function changeBackImage(x) {
  document.getElementById("homefield").style.backgroundImage = "url(" + backImage[x] + ")";
  document.getElementById("homefield").style.backgroundImage.innerText = backImage[x];
}
function startTimer() {
  var x = 0;
  changeBackImage(x);
  setInterval(function() {
    x = x + 1 >= backImage.length ? 0 : x + 1;
    changeBackImage(x);
  }, 3000);
}
startTimer();
  
// setting scroll behaviour
const btn = document.getElementById('about');
btn.addEventListener('click', () => window.scrollBy({
  top: 600,
  behavior: 'auto',
}));
  
const Btn = document.getElementById('contact');
Btn.addEventListener('click', () => window.scrollBy({
  top: 1000,
  behavior: 'auto',
}));

function openForm() {
  document.getElementById("myForm").style.display='inline-block';
  document.getElementById("navigation").style.opacity='0.5';
  document.getElementById("homefield").style.opacity='0.8';
}

function openform() {
  document.getElementById("myform").style.display='inline-block';
  document.getElementById("navigation").style.opacity='0.5';
  document.getElementById("homefield").style.opacity='0.8';
}

function openFormUp() {
  document.getElementById("myForm").style.display='inline-block';
  document.getElementById('myform').style.display = "none";
  document.getElementById("navigation").style.opacity='0.5';
  document.getElementById("homefield").style.opacity='0.8';
}

function openformUp() {
  document.getElementById("myForm").style.display='none';
  document.getElementById('myform').style.display = "inline-block";
  document.getElementById("navigation").style.opacity='0.5';
  document.getElementById("homefield").style.opacity='0.8';
}

// closing form 
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("navigation").style.opacity='1';
  document.getElementById("homefield").style.opacity='1';
}

function closeform() {
  document.getElementById("myform").style.display = "none";
  document.getElementById("navigation").style.opacity='1';
  document.getElementById("homefield").style.opacity='1';
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


// giving user access on validation
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

// setting the form response for the messages
function proceed() {
  var fn = document.getElementById("fn").value;
  var ln = document.getElementById("ln").value;
  var em = document.getElementById("ea").value;
  var mes = document.getElementById("contactmessage").value;
  event.preventDefault();
  if (fn == "" || ln == "" || em == "" || mes == ""){
    document.getElementById('fn').style.border = "1px solid red";
    document.getElementById('ln').style.border = "1px solid red"; 
    document.getElementById("ea").style.border = "1px solid red";
    document.getElementById("contactmessage").style.border = "1px solid red";
    alert("We will like to here from you, kindly fill the form");
  }else {
    document.getElementById('fn').style.border = "1px solid grey";
    document.getElementById('ln').style.border = "1px solid grey"; 
    document.getElementById("ea").style.border = "1px solid grey";
    document.getElementById("contactmessage").style.border = "1px solid grey"
    alert("Thank you " + fn+ " " + ln+ " for reaching out to us, your message has been delivered.");
  }
  document.getElementById("contactForm").reset();
};

const scrollToTopButton = document.getElementById('goup');

// getting button to scroll to top
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;
  
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 30);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}
