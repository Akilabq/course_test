let sider = document.querySelector('.sider')
let menuItems = sider.querySelectorAll('li')


const circleChart = document.getElementById('doughnutChart').getContext('2d');

new Chart(circleChart, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [32, 68],
            backgroundColor: ['#6E62E5', '#CBCDFF'],
            borderWidth: 0,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '98%',
        plugins: {
            tooltip: { enabled: false }
        }
    }
});
const labels = [
    '1-10 May',
    '',
    '11-20 May',
    '',
    '20-30 May'
]
const data = {
    labels: labels,
    datasets: [{
        data: [50, 35, 45, 45, 45],
        backgroundColor: [
            '#6E62E5',
            '#B7B9FB',
            '#6E62E5',
            '#B7B9FB',
            '#6E62E5',
        ],
        borderRadius: [
            5
        ],
        maxBarLength: [
            60
        ]
    }]
};
new Chart(barChart, {
    type: 'bar',
    data: data,
    options: {
        label: 'none',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 60,
                min: 20
            }
        }
    }
})

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
let heroBtn = document.querySelector('.hero-btn')
let btnChevron = document.querySelector('.hero-btn i')

heroBtn.addEventListener('mouseenter', (e) => {
    btnChevron.style.transform = 'rotate(90deg)'
})
heroBtn.addEventListener('mouseleave', (e) => {
    btnChevron.style.transform = 'rotate(0deg)'
})
let adCard = document.querySelectorAll('.card')
let adImg = document.querySelectorAll('.adimg')

adCard.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('card-hovered')
    })
    element.addEventListener('mouseleave', (e) => {
        element.classList.remove('card-hovered')
    })
});
// adCard.addEventListener('mouseenter', (e) => {
//     e.target.children[0].style.transform = 'scale(1.1)'
//     console.log(e);

// })
// adCard.addEventListener('mouseleave', (e) => {
//     e.target.children[0].style.transform = 'scale(1.1)'
// })
const searchInput = document.getElementById('search-input');
const phrases = [
    "Search courses...", 
    "Start your career here...", 
    "Type something...",
    "Search..."
];

let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

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

document.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {
        type()
    }, 4000);
});