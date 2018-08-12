require('./scss/main.scss');
require('./js/picturefill.js');

// Load images dymamically
function importImgs(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importImgs(require.context('./img', false, /\.(png|jpe?g|svg)$/));

// Smooth scrolling
function smoothScroll(target,duration) {
  var target = document.querySelector(target);
  var targetPos = target.getBoundingClientRect().top;
  var startPos = window.pageYOffset;
  var distance = targetPos - startPos;
  var startTime = null;
  function animation(currentTime) {
    if(startTime === null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed,startPos,distance,duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
	  t /= d/2;
	  if (t < 1) return c/2*t*t + b;
	  t--;
	  return -c/2 * (t*(t-2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');

section1.addEventListener('click', function() {
  smoothScroll('.section2', 1000);
});

// $(".slide").click(function (e) {
//   hrefAttr = $(this).attr("href");
//   $("html, body").animate({
//       scrollTop: $(hrefAttr).offset().top
//   }, 1000);
//   e.preventDefault(e);
// });

// close the expanded hamburger menu on click
// function shutMenu() {
//   var hamburger = {
//      navToggle: document.querySelector('.nav-toggle'),
//      nav: document.querySelector('nav'),
//      toggle: function(e) {
//          e.preventDefault();
//          this.navToggle.classList.toggle('expanded');
//          this.nav.classList.toggle('expanded');
//      }
//   };

//  hamburger.navToggle.addEventListener('click', function(e) {
//      hamburger.toggle(e);
//  });
//  hamburger.nav.addEventListener('click', function(e) {
//      hamburger.toggle(e);
//  });
// }

// shutMenu();

var shutMenu = document.querySelector('.nav-item');
shutMenu.addEventListener('click', function(e) {
    
})