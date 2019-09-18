// setting the page to go to top on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// changing the page title 
function titleChange() {
  document.title = "MedConnect|About";
};

function titleChanges() {
  document.title= "MedConnect|Contact Us";
};

// opening and closing dropdown menu onclick of username button
function userMenu() {
  document.getElementById("menu").style.display='inline-block';
}

// making dropdown menu stay on moving the mouse in
document.getElementById('formmenu').addEventListener('mouseover', function() {
  document.getElementById("menu").style.display = "inline-block";
  
})

// making dropdown menu close on moving the mouse out of the box
document.getElementById('formmenu').addEventListener('mouseout', function() {
  document.getElementById("menu").style.display = "none";
})

// changing username to name given by user on successful signup or signin
document.getElementById('username').innerHTML = localStorage.getItem('username');
document.getElementById('username').style.marginRight = '10px';

// show list of users appointments on click of appointments in dropdown menu
function openAppointments() {
  window.scrollTo(0, 800);
  document.getElementById('appointmentList').style.overflow = 'scroll';
  document.getElementById('menu').style.display = 'none';
}

// going to home page on log out
function reDirect() {
  window.location.href = '../html/index.html';
}

// setting scroll behaviour
const btn = document.getElementById('seconditem');
btn.addEventListener('click', () => window.scrollBy({
  top: 600,
  behavior: 'auto',
}));
  
const Btn = document.getElementById('fourthitem');
Btn.addEventListener('click', () => window.scrollBy({
  top: 1000,
  behavior: 'auto',
}));


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
    document.getElementById("contactmessage").style.border = "1px solid grey";
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
