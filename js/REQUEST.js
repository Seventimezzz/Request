const swiper = new Swiper('.swiper', {
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// email copy
var fridge = document.getElementById("fridge");
var long = document.getElementById("long");

fridge.onclick = function(){
    if (long.className == "product__item__drop"){
      long.className = "long__active";
    } else {
      long.className = "product__item__drop";
    }
};

// long
var email__copy = document.getElementById("email__copy");
var email__copy__active = document.getElementById("email__copy__active");

email__copy.onclick = function(){
    if (email__copy__active.className == "email__copy__box__on"){
      email__copy__active.className = "email__copy__box";
    } else {
      email__copy__active.className = "email__copy__box__on";
    }
};

// short
var teplovoe = document.getElementById("teplovoe");
var short = document.getElementById("short");

teplovoe.onclick = function(){
    if (short.className == "short"){
      short.className = "short__active";
    } else {
      short.className = "short";
    }
};