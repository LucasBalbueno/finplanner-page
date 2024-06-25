const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting === true) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        };
    });
});

const elements = document.querySelectorAll('.hiddenLeft, .hiddenRight');

elements.forEach((element) => myObserver.observe(element));