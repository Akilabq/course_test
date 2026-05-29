let sider = document.querySelector('.sider')
let menuItems = sider.querySelectorAll('li')
const cards = document.querySelectorAll('.card');


document.addEventListener("DOMContentLoaded", () => {
    let currentPath = window.location.pathname.split('/').pop();

    if (currentPath === '') {
        currentPath = 'index.html';
    }

    let menuLinks = document.querySelectorAll('.menu-list li a');

    menuLinks.forEach(link => {
        let menuItem = link.querySelector('.menu-item');

        if (link.getAttribute('href') === currentPath) {
            menuItem.classList.add('menuItem-active');
        } else {
            menuItem.classList.remove('menuItem-active');
        }
    });
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove('invisible');

                card.classList.add('animate__animated', 'animate__fadeInUp');
            }, index * 200);
        });
    }, 500)
    
});
function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        characterIndex--;
        typeSpeed = 80;
    } else {
        characterIndex++;
        typeSpeed = 150;
    }

    searchInput.placeholder = currentPhrase.slice(0, characterIndex);


    if (!isDeleting && characterIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000;
    }
    else if (isDeleting && characterIndex === 0) {
        isDeleting = false;

        phraseIndex++;
        if (phraseIndex >= phrases.length) {
            phraseIndex = 0;
        }

        typeSpeed = 800;
    }

    setTimeout(type, typeSpeed);
}
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        type
    }, 4000);
});
