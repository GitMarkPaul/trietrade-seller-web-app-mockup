const myChart = document.getElementById('myChart').getContext('2d')
const myLineChart = document.getElementById('myLineChart').getContext('2d')

const barChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

const myLChart = new Chart(myLineChart, {
    type: 'bar',
    data: {
        datasets: [
          {
            label: 'Goal',
            data: [1250, 1350, 1300, 1700, 1900, 2700, 2150],
            type: 'line',
            fill: false,
            borderColor: '#23B7E5',
            backgroundColor: '#23B7E5'
          },
          {
            label: 'Sales',
            data: [1200, 1300, 1277, 1690, 1898, 2740, 2263], 
            backgroundColor: [
              '#66BD78',
              '#66BD78',
              '#F05050',
              '#F05050',
              '#66BD78',
              '#66BD78',
              '#F05050'
            ]
          },
          {
            label: 'Comps',
            data: [1100, 1200, 1300, 1700, 1900, 2500, 2300],
            type: 'line',
            backgroundColor: '#cccccc',
            fill: true,
            borderWidth: 0
          }
        ],
        labels: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },

});

