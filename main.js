
let menuItems = document.querySelectorAll('li')

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menuItems.forEach((elem) => {
            elem.classList.remove('menuItem-active')
        })
        item.classList.add('menuItem-active')
    })
})
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