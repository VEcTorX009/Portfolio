if(document.readyState==="loading"){
  setTimeout(function(){
    $('.loader_bg').fadeToggle();
  },1500);
}


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
    } else {
      letsgoa();
    }
    if (elementTop1 < windowHeight1 - elementVisible1) {
      reveals1[i].classList.add("active");
    } else {
    }
  }
}
window.addEventListener("scroll", reveal);
function reveal6() {
  var reveals6 = document.querySelectorAll(".reveal6");
  var reveals7 = document.querySelectorAll(".reveal7");
  for (var i = 0; i < reveals6.length; i++) {
    var windowHeight6 = window.innerHeight;
    var elementTop6 = reveals6[i].getBoundingClientRect().top;
    var elementVisible6 = 150;
    var windowHeight6 = window.innerHeight;
      
    if (elementTop6 < windowHeight6 - elementVisible6) {
      reveals7[i].classList.add("active");
      reveals6[i].classList.add("active");
    } else {
      letsgo();
    }

  }
}

window.addEventListener("scroll", reveal6);

function hi() {
  var w = document.querySelectorAll(".reveal5");
  for (let i = 0; i < w.length; i++) {
    var wh = window.innerHeight;
    var e2 = w[i].getBoundingClientRect().top;
    var e2v= 150;

    if(e2<wh-e2v){
      w[i].classList.add("active");
    }
    else{
      break;
    }
  }
}
window.addEventListener("scroll",hi);
function reveal2() {
  var reveals2 = document.querySelectorAll(".reveal2");
  for (var i = 0; i < reveals2.length; i++) {
    var windowHeight2 = window.innerHeight;
    var elementTop2 = reveals2[i].getBoundingClientRect().top;
    var elementVisible2 = 150;
    

    if (elementTop2 < windowHeight2 - elementVisible2) {
      reveals2[i].classList.add("active");
    }
    else{
      
    }
  }
}
window.addEventListener("scroll", reveal2);
function reveal4() {
  var reveals4 = document.querySelectorAll(".reveal4");
  for (var i = 0; i < reveals4.length; i++) {
    var windowHeight2 = window.innerHeight;
    var elementTop2 = reveals4[i].getBoundingClientRect().top;
    var elementVisible2 = 150;
    

    if (elementTop2 < windowHeight2 - elementVisible2) {
      reveals4[i].classList.add("active");
    }
    else{
      
    }
  }
}

window.addEventListener("scroll", reveal4);
function reveal3() {
  var reveals3 = document.querySelectorAll(".reveal3");
  for (var i = 0; i < reveals3.length; i++) {
    var windowHeight3 = window.innerHeight;
    var elementTop3 = reveals3[i].getBoundingClientRect().top;
    var elementVisible3 = 150;

    if (elementTop3 < windowHeight3 - elementVisible3) {
      reveals3[i].classList.add("active");

    } else {
      letsgob();
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
function topFunction() {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
  
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
          .querySelector("a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

let mybutton = document.getElementById("myBtn");

reveal();
function letsgo() {
  var textWrapper = document.querySelector(".ml11 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter bg-black'>$&</span>"
  );

  anime
    .timeline({ loop: 1 })
    .add({
      targets: ".ml11 .line",
      scaleY: [0, 1],
      opacity: 0,
      easing: "easeOutExpo",
      duration: 1000,
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
      delay: 10,
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
    "<span class='lettera bg-black'>$&</span>"
  );

  anime
    .timeline({ loop: 1 })
    .add({
      targets: ".ml11a .linea",
      scaleY: [0, 1],
      opacity: 0,
      
      easing: "easeOutExpo",
      duration: 200,
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
    "<span class='letterb bg-black'>$&</span>"
  );

  anime
    .timeline({ loop: 1 })
    .add({
      targets: ".ml11b .lineb",
      scaleY: [0, 1],
      opacity: 0,
      
      easing: "easeOutExpo",
      duration: 200,
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
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#2da1fd", "#2a9ffb", "#30a4ff", "#2ba2ff", "#cd481c"," #da0043", "#d5491a", "#cf471a",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
