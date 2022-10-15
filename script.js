setTimeout(function(){
  $('.loader_bg').fadeToggle();
},1500);

var abc = 0;
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var reveals1 = document.querySelectorAll(".reveal1");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight1 = window.innerHeight;
    var elementTop1 = reveals1[i].getBoundingClientRect().top;
    var elementVisible1 = 150;
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      for (; abc < 1; abc++) {
        letsgoa();
      }
    } else {
      reveals[i].classList.remove("active");
    }
    if (elementTop1 < windowHeight1 - elementVisible1) {
      reveals1[i].classList.add("active");
    } else {
      reveals1[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

var ab = 0;
function reveal2() {
  var reveals2 = document.querySelectorAll(".reveal2");
  for (var i = 0; i < reveals2.length; i++) {
    var windowHeight2 = window.innerHeight;
    var elementTop2 = reveals2[i].getBoundingClientRect().top;
    var elementVisible2 = 150;

    if (elementTop2 < windowHeight2 - elementVisible2) {
      reveals2[i].classList.add("active");
      for (; ab < 1; ab++) {
        letsgo();
      }
    } else {
      reveals2[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal2);
var abcd = 0;
function reveal3() {
  var reveals3 = document.querySelectorAll(".reveal3");
  for (var i = 0; i < reveals3.length; i++) {
    var windowHeight3 = window.innerHeight;
    var elementTop3 = reveals3[i].getBoundingClientRect().top;
    var elementVisible3 = 150;

    if (elementTop3 < windowHeight3 - elementVisible3) {
      reveals3[i].classList.add("active");
      for (; abcd < 1; abcd++) {
        letsgob();
      }
    } else {
      reveals3[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal3);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// // When the user clicks on the button, scroll to the top of the document
function topFunction() {

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
}

let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("nav a");

window.onscroll = () => {
  scrollFunction();
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

let mybutton = document.getElementById("myBtn");
// To check the scroll position on page load
reveal();
function letsgo() {
  var textWrapper = document.querySelector(".ml11 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: 1 })
    .add({
      targets: ".ml11 .line",
      scaleY: [0, 1],
      opacity: 0,
      easing: "easeOutExpo",
      duration: 700,
    })
    .add({
      targets: ".ml11 .line",
      translateX: [
        0,
        document.querySelector(".ml11 .letters").getBoundingClientRect().width +
          10,
      ],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100,
    })
    .add({
      targets: ".ml11 .letter",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1),
    })
    .add({
      targets: ".ml11",
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}
function letsgoa() {
  var textWrappera = document.querySelector(".ml11a .lettersa");
  textWrappera.innerHTML = textWrappera.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='lettera'>$&</span>"
  );

  anime
    .timeline({ loop: 1 })
    .add({
      targets: ".ml11a .linea",
      scaleY: [0, 1],
      opacity: 0,
      
      easing: "easeOutExpo",
      duration: 700,
    })
    .add({
      targets: ".ml11a .linea",
      translateX: [
        0,
        document.querySelector(".ml11a .lettersa").getBoundingClientRect()
          .width + 10,
      ],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100,
    })
    .add({
      targets: ".ml11a .lettera",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1),
    })
    .add({
      targets: ".ml11a",
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}
function letsgob() {
  var textWrapperb = document.querySelector(".ml11b .lettersb");
  textWrapperb.innerHTML = textWrapperb.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='lettera'>$&</span>"
  );

  anime
    .timeline({ loop: 1 })
    .add({
      targets: ".ml11b .lineb",
      scaleY: [0, 1],
      opacity: 0,
      easing: "easeOutExpo",
      duration: 700,
    })
    .add({
      targets: ".ml11b .lineb",
      translateX: [
        0,
        document.querySelector(".ml11b .lettersb").getBoundingClientRect()
          .width + 10,
      ],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100,
    })
    .add({
      targets: ".ml11b .letterb",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1),
    })
    .add({
      targets: ".ml11b",
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

