import $ from 'jquery';

function scrollWith(sections) {
  window.onscroll = function() {
    naviChanger(sections);
  }
}

function naviChanger(sections) {
  var y = document.documentElement.scrollTop;
  var h = document.documentElement.clientHeight;
  $('.totop').toggleClass('slide-in', y > h)
  for (var i = 0; i < sections.length; i++) {
    var section = "#" + sections[i];
    var section_next = "#" + sections[i + 1];
    var section_navi = section + "Navi";
    var prev_h = $(section)[0].offsetTop - 150;
    var next_h;
    if (i == sections.length - 1) {
      next_h = document.documentElement.scrollHeight;
    }
    else {
      next_h = $(section_next)[0].offsetTop - 150;
    }
    if ((y >= prev_h) && (y < next_h)) {
      $(section_navi)[0].style.borderColor = "#2083e0";
    }
    else {
      $(section_navi)[0].style.borderColor = "#eee";
    }
  }
}

export {scrollWith};