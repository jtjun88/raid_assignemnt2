// Define Scroll Elements
let scroll_bg = document.getElementById("scroll_bg");
let scroll_logo = document.getElementById("scroll_logo");
let scroll_aircraft = document.getElementById("scroll_aircraft");
let scroll_bldg1 = document.getElementById("scroll_bldg1");
let scroll_bldg2 = document.getElementById("scroll_bldg2");
let scroll_mid = document.getElementById("scroll_mid");
let scroll_water = document.getElementById("scroll_water");
let scroll_clouds = document.getElementById("scroll_clouds");

// Define Popup elements
let form = document.getElementById("user_form");
let popup = document.querySelector('.popup');
let user_name = document.getElementById("user_name");
let user_email = document.getElementById("user_email");
let user_subject = document.getElementById("user_subject");
let user_text = document.getElementById("user_text");
let saved_name = document.getElementById("saved_name");
let saved_email = document.getElementById("saved_email");
let saved_subject = document.getElementById("saved_subject");
let saved_text = document.getElementById("saved_text");

// Scroll Listener
window.addEventListener("scroll", function() {
  let scrollPos = window.scrollY;

  if (scrollPos < 200) {
    scroll_logo.style.top = `${600 - scrollPos * 2}px`;
  } else {
    scroll_logo.style.top = `${scrollPos}px`;
  }

  scroll_bldg1.style.top = `${-50 + scrollPos * 1}px`;
  scroll_bldg2.style.top = `${-50 + scrollPos * 0.9}px`;
  scroll_mid.style.top = `${0 + scrollPos * 0.8}px`;
  scroll_water.style.top = `${150 + scrollPos * 0.5}px`;

  scroll_aircraft.style.top = `${scrollPos * 0.4}px`;
  scroll_aircraft.style.left = `${scrollPos * 1.5}px`;  
  scroll_clouds.style.right = `${- scrollPos * 0.5}px`;
});

// Popup listener
form.addEventListener('submit', function(){
  saved_name.innerText = "Name: " + user_name.value;
  saved_email.innerText = "Email: " + user_email.value;
  saved_subject.innerText = "Subject: " + user_subject.value;
  saved_text.innerText = "Input: " + user_text.value;
  popup.classList.add('poppedup');
});

// Close Popup
function popupClose() {
  popup.classList.remove('poppedup');
  user_name.value = "";
  user_email.value = "";
  user_subject.value = "";
  user_text.value = "";
}

