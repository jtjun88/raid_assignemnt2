// Define Scroll Elements
let scroll_bg = document.getElementById("scroll_bg");
let scroll_logo = document.getElementById("scroll_logo");
let scroll_aircraft = document.getElementById("scroll_aircraft");
let scroll_bldg1 = document.getElementById("scroll_bldg1");
let scroll_bldg2 = document.getElementById("scroll_bldg2");
let scroll_mid = document.getElementById("scroll_mid");
let scroll_water = document.getElementById("scroll_water");
let scroll_clouds = document.getElementById("scroll_clouds");

// Pop up function
function submitButton() {
  let x = document.getElementById("user_input").value;

  // If input is empty
  if (isNaN(x)) {
    x = "Please Enter an Input...";
    alert(x);
  } else {
    alert(x);
  }

  /* var popup = document.getElementById("myPopup");
  popup.classList.toggle("show") */
}


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

})

/*

let timVine = document.getElementById("tim-vine");
let navbar = document.getElementById("main-nav");

let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    header.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.remove('sticky');
    header.classList.remove('navbarOffsetMargin');
  }
});

*/