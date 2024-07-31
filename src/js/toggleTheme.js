const htmlElements = document.querySelectorAll('.htmlApp');

const toggleButtons = document.querySelectorAll('.btn-toggleMode');

function toggleTheme() {
    const isLight = localStorage.getItem('theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);

    htmlElements.forEach(htmlElement => {
        if (newTheme === 'light') {
            htmlElement.classList.add('light');

        } else {
            htmlElement.classList.remove('light');
        }
    });
}

if (toggleButtons) {
    toggleButtons.forEach((button) => {
        button.addEventListener('click', toggleTheme);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const isLight = localStorage.getItem('theme') === 'light';
    if (isLight) {
        htmlElements.forEach(htmlElement => {
            htmlElement.classList.add('light');
        });
    }
});

if (toggleButtons) {
    toggleButtons.forEach((button) => {
        button.addEventListener('click', toggleTheme);
    });
}

window.addEventListener('message', (event) => {
    if (event.data.type === 'TOGGLE_THEME') {
        htmlElements.forEach(htmlElement => {
            htmlElement.classList.toggle('light');
        });
    }
});
