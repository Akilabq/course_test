let sider = document.querySelector('.sider')
let menuItems = sider.querySelectorAll('li')


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
});