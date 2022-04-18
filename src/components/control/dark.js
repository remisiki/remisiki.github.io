import $ from 'jquery';

function toggleDarkMode() {
  if (themeIsDark()) {
    $('body').addClass('dark-body');
    $('article').addClass('dark-content');
    $('aside').addClass('dark-content');
    $('.twitter-tl').addClass('dark-content');
    $('p:not(.green-text):not(.red-text):not(.brown-text)').addClass('dark-content');
    $('h1').addClass('dark-content');
    $('h3').addClass('dark-content');
    $('.cell').addClass('dark-content');
    $('.cell .content').addClass('dark-content');
    $('.yellow-marker-thin').addClass('yellow-marker-thin-dark');
  }
  else {
    $('body').removeClass('dark-body');
    $('article').removeClass('dark-content');
    $('aside').removeClass('dark-content');
    $('.twitter-tl').removeClass('dark-content');
    $('p:not(.green-text):not(.red-text):not(.brown-text)').removeClass('dark-content');
    $('h1').removeClass('dark-content');
    $('h3').removeClass('dark-content');
    $('.cell').removeClass('dark-content');
    $('.cell .content').removeClass('dark-content');
    $('.yellow-marker-thin').removeClass('yellow-marker-thin-dark');
  }
}

function getTheme() {
  return themeIsDark() ? "dark" : "light";
}

function themeIsDark() {
  return ($('#moon').hasClass('title-selected'));
}

function checkDarkMode() {
  const dark_prefer = localStorage.getItem('dark_prefer')
  if (dark_prefer == "true") {
      $('#moon').addClass('title-selected');
      toggleDarkMode();
  }
  else if (
    dark_prefer == null &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    $('#moon').addClass('title-selected');
    toggleDarkMode();
  }
}

export { toggleDarkMode, getTheme, themeIsDark, checkDarkMode }