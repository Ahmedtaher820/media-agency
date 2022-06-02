var burger = document.querySelector(".burger");
var burgerSpan = document.querySelectorAll(".burger span");
var navAll = document.querySelector(".nav-all");
burger.addEventListener("click", () => {
  burgerSpan.forEach((e) => {
    e.classList.toggle("colsing");
  });
  navAll.classList.toggle("disNav");
});

//Display Imgaes

var productImgDisplay = document.querySelectorAll(".productImgDisplay");
var changeImg = document.querySelector(".changeImg");
var showImg = document.querySelector(".showImg");
var closingImg = document.querySelector(".fa-times");
var iconProduct = document.querySelectorAll(".fa-arrows-alt");
var iconPlus = document.querySelectorAll(
  ".agency-news .agencyBox .fa-search-plus"
);

productImgDisplay.forEach((e) => {
  e.addEventListener("click", (el) => {
    mainDisplayImg(el, "project");
  });
});
iconProduct.forEach((e) => {
  e.addEventListener("click", (el) => {
    var imgSrc = e.parentElement.parentElement.firstElementChild.src;
    mainDisplayImg(imgSrc, "product");
  });
});
iconPlus.forEach((e) => {
  e.addEventListener("click", () => {
    var iconImg =
      e.parentElement.parentElement.parentElement.firstElementChild.src;
    mainDisplayImg(iconImg, "agency");
  });
});
function mainDisplayImg(el, str) {
  if (str === "project") {
    changeImg.src = el.target.src;
  } else if (str === "product") {
    changeImg.src = el;
  } else if (str === "agency") {
    changeImg.src = el;
  }
  showImg.style.animation = "show .5s linear 1 forwards";
  changeImg.style.animation = "showImg 1s linear 1 forwards";
}

showImg.onclick = hidImg;
closingImg.onclick = hidImg;

function hidImg() {
  showImg.style.animation = "";
  changeImg.style.animation = "";
  showImg.addEventListener("onanimationend", () => {
    showImg.style.animation = "";
  });
}

// slider in products
//first carousel
$(".carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  items: 1,
});

//second carousel
$(".carousel2").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  items: 1,
});

//third carousel
$(".carousel3").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  autoplay: true,
  autoplayTimeout: 1800,
  autoplayHoverPause: true,
  items: 1,
});

//fouth carousel
$(".carousel4").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  items: 1,
});

$(".agencyCarousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  items: 3,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [2000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

//Remove Active From Icon In Amagency News Image
var activeIcon = document.querySelectorAll(".first-icon .active");
var agencyOverlayImg = document.querySelectorAll(".agencyOverlayImg");

agencyOverlayImg.forEach((e) => {
  e.addEventListener("mousemove", () => {
    activeIcon.forEach((el) => {
      el.classList.remove("active");
    });
  });
});

// Check Email In Subscribe
var email = document.querySelector(".subscribe input");
var btn = document.querySelector(".subscribe button");
var check = document.querySelector(".check");
var checkParagraph = document.querySelector(".check p");
var faCheck = document.querySelector(".fa-check");
btn.addEventListener("click", () => {
  var validateEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value === "") {
    swal("Oops", "This Field Can Not Be Empty", "error");
  } else {
    if (validateEmail.test(email.value)) {
      var value1 = email.value;
      var user = value1.indexOf("@");
      var userName = value1.slice(0, user);
      checkParagraph.textContent = `Thank You ${userName} For This Trust`;
      if (window.innerWidth >= 768) {
        check.style.animation = "checkanimation 2s 1 ease-in-out forwards";
      } else if (window.innerWidth <= 768) {
        faCheck.style.opacity = 1;
      }
      setTimeout(() => {
        check.style.animation = "";
        email.value = "";
        email.focus();
      }, 7000);
      setTimeout(() => {
        faCheck.style.opacity = 0;
        email.value = "";
        email.focus();
      }, 7000);
    } else {
      swal("Oops", "Logical Error", "error");
    }
  }
});

// team slider

var content = document.querySelector(".content");
var slideright = document.querySelector(".content .right");
var slideleft = document.querySelector(".content .left");
var top1 = document.querySelector(".content .fa-arrow-up");
var bottom1 = document.querySelector(".content .fa-arrow-down");
var slideLength = slideleft.querySelectorAll("div").length;
slideleft.style.top = `-${320 * (slideLength - 1)}px`;
var currentLength = 0;
top1.addEventListener("click", () => {
  movingNow("top");
});
bottom1.addEventListener("click", () => {
  movingNow("down");
});
function movingNow(direction) {
  const myHeight = content.clientHeight;

  if (direction === "top") {
    currentLength++;
    if (currentLength > slideLength - 1) {
      currentLength = 0;
    }
  } else if (direction === "down") {
    currentLength--;
    if (currentLength < 0) {
      currentLength = slideLength - 1;
    }
  }
  slideleft.style.transform = `translateY(${myHeight * currentLength}px)`;
  slideright.style.transform = `translateY(-${myHeight * currentLength}px)`;
}

var mainNav = document.querySelector("header nav");
var brandImg = document.querySelector(".brand img");
window.addEventListener("scroll", () => {
  transparentFun();
  disScrollButton();
});
// make nav bar transparent color in the start of home page

function transparentFun() {
  if (window.pageYOffset == 0) {
    if (window.innerWidth >= 1100) {
      mainNav.classList.add("transparentNav");
      brandImg.src = "/img/whitebrand.png";
    }
  } else {
    mainNav.classList.remove("transparentNav");
    brandImg.src = "/img/blackbrand.png";
  }
}
//button scroll to home
var btnscroll = document.querySelector(".scroll-btn");
function disScrollButton() {
  if (window.pageYOffset >= 700) {
    btnscroll.style.opacity = 1;
    btnscroll.style.pointerEvents = "auto";
  } else {
    btnscroll.style.opacity = 0;
  }
}
btnscroll.onclick = function () {
  window.scrollTo(0, 0);
};

// loader
var header = document.querySelector("header");
var loader = document.querySelector(".loading");
window.onload = function () {
  setTimeout(() => {
    loader.style.display = "none";
    loader.style.opacity = 0;
    header.style.display = "block";
    setTimeout(() => {
      header.style.opacity = 1;
    }, 100);
  }, 3000);
};
// go down with chevron icon
var chevronDown = document.querySelector("header .arrow");
chevronDown.addEventListener("click", () => {
  window.scrollTo(0, 1150);
});

//Tab Music

//active tab music first
var tabMusic = document.querySelector(".tabMusic");
var boxes = document.querySelectorAll(".boxes .box");
var sounds = document.querySelectorAll(".boxes .box audio");
var circle = document.querySelectorAll(".boxes .box .circle");
var bigBox = document.querySelector(".boxes");
var tabMusicText = document.querySelector(".tabMusic .text");
tabMusic.addEventListener("dblclick", () => {
  bigBox.classList.toggle("active");
  if (bigBox.classList.contains("active")) {
    tabMusicText.textContent = `Double Click To Stop Music`;
  } else {
    tabMusicText.textContent = `Double Click To Start Music`;
  }
});

var numOfClick = 0;
document.body.addEventListener("click", function () {
  if (bigBox.classList.contains("active")) {
    var numOfSelect = selectRandom();
    sounds[numOfSelect].play();
    createSpan(numOfSelect);
  }
});
function selectRandom() {
  return Math.floor(Math.random() * boxes.length);
}
function createSpan(ind) {
  var mainSpan = document.createElement("span");
  circle[ind].appendChild(mainSpan);
  setTimeout(() => {
    mainSpan.remove();
  }, 4000);
}
//
var moon = document.querySelector(".moonlight li");
console.log(moon);

var colLi = $(".moonlight li");
colLi.click(function () {
  $("link[href *='color']").attr("href", $(this).attr("data-value"));
});
