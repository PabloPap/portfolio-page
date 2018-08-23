require('./scss/main.scss');
require('picturefill');
require('zenscroll');

// Load images dymamically
function importImgs(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
importImgs(require.context('./img', false, /\.(png|jpe?g|svg)$/));

// hide hamburger menu when one of its elements is clicked
var change = new Event('change');
var navLinks = document.querySelectorAll('.nav-item');
Array.from(navLinks).forEach(function(navlink) {
  navlink.addEventListener('click', function() {
    var boxChecked = document.getElementById("nav-toggle").checked;
    toggle(boxChecked);
  });
});

function toggle(checked) {
  if(checked) {
    var checkBox = document.getElementById("nav-toggle");
    checkBox.dispatchEvent(change);
    document.getElementById("nav-toggle").checked = false;
  }
}