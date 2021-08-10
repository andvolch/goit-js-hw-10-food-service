const checkbox = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkbox.addEventListener('change', onThemeChange);
body.addEventListener('change', onPutCheckedProperty);


function togleClass(add, remove) {
    body.classList.add(add);
    body.classList.remove(remove);
};

function onThemeChange() {
    if (checkbox.checked) {
        togleClass(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
        
    } else {
        togleClass(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);
    }
};

function onPutCheckedProperty() {
    if (localStorage.getItem('theme') === Theme.DARK) {
        body.classList.add(Theme.DARK);
        checkbox.checked = true;
    }
};

onPutCheckedProperty();
