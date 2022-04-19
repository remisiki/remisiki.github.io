function toggleDarkMode() {
  const theme_is_dark = themeIsDark();
  let lis = [];
  lis.push(
    [document.body],
    document.getElementsByTagName('article'),
    document.getElementsByTagName('aside'),
    document.getElementsByTagName('h1'),
    document.getElementsByTagName('h3'),
    document.getElementsByClassName('twitter-tl'),
    document.getElementsByClassName('cell'),
    document.getElementsByClassName('yellow-marker-thin'),
    document.querySelectorAll('p:not(.green-text):not(.red-text):not(.brown-text)'),
    document.querySelectorAll('.cell .content')
  );
  for (const li of lis) {
    for (const item of li) {
      if (theme_is_dark) {
        item.classList.add('dark-content');
      }
      else {
        item.classList.remove('dark-content');
      }
    }
  }
}

function getTheme() {
  return themeIsDark() ? "dark" : "light";
}

function themeIsDark() {
  const user_prefer = localStorage.getItem('dark_prefer');
  return ( user_prefer === 'true'
    || (
      user_prefer == null
      && window.matchMedia
      && window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  );
}

function checkDarkMode() {
  const dark_prefer = localStorage.getItem('dark_prefer');
  const moon = document.getElementById('moon');
  if (dark_prefer === 'true') {
      moon.classList.add('title-selected');
      toggleDarkMode();
  }
  else if (dark_prefer == null
    && window.matchMedia
    && window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    moon.classList.add('title-selected');
    toggleDarkMode();
  }
}

export { toggleDarkMode, getTheme, themeIsDark, checkDarkMode }