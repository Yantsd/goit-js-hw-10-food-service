import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.checkBodyTheme.add(
  localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'),
);

refs.inputCheckBox.addEventListener('change', checkedTheme);

if (refs.checkBodyTheme.value === Theme.DARK) {
  refs.inputCheckBox.checked = true;
}

function checkedTheme(event) {
  if (event.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    refs.checkBodyTheme.replace(Theme.LIGHT, Theme.DARK);
    return;
  }
  localStorage.setItem('theme', Theme.LIGHT);
  refs.checkBodyTheme.replace(Theme.DARK, Theme.LIGHT);
}
