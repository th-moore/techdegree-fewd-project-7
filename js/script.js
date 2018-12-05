// CHARTS

// line graph
let lineCanvas = document.getElementById('line-graph').getContext('2d');
let lineChart = new Chart(lineCanvas, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "24-31"],
        datasets: [{
            label: "Total Visits",
            data: [500, 1000, 1250, 750, 1000, 500, 1000, 1250, 1500, 2000, 1750, 1500],
            backgroundColor: 'rgba(115, 119, 191, 0.4)',
            borderColor: '#7477BF',
            pointBackgroundColor: 'rgba(255,255,255,1)',
            pointBorderColor: 'rgba(116,120,186,1)',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointStyle: 'circle',
            borderWidth: 1,
        }]
    },

    // Configuration options go here
    options: {
      // maintainAspectRatio: false,
      legend:{display:false},
      elements:{
        line:{tension:0}
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 2500,
              stepSize: 500
            }
          }
        ]
      }
    }
});

// bar chart
let barCanvas = document.getElementById('bar-chart').getContext('2d');
let barChart = new Chart(barCanvas, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
            label: "Daily Visits",
            data: [75, 100, 150, 125, 200, 175, 100],
            backgroundColor: '#7477BF',
            borderColor: '#7477BF',
            borderWidth: 2,
        }]
    },

    // Configuration options go here
    options: {
      legend:{display:false},
      elements:{
        point:{backgroundColor:'white'},
        line:{tension:0},
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 250,
              stepSize: 50
            }
          }
        ]
      }
    }
});

// doughnut chart
let doughnutCanvas = document.getElementById('doughnut-chart').getContext('2d');
let doughnutChart = new Chart(doughnutCanvas, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
      datasets: [{
          label:'Visits',
          data: [100, 30, 30],
          backgroundColor: ['#7477BF', '#81C98F', '#74B1BF'],
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["Desktop", "Tablets", "Phones"],
    },

    // Configuration options go here
    options: {
      legend:{
        display: true,
        position: 'right',
        labels:{
          boxWidth: 20,
          fontSize: 15,
          padding: 20
        }
      },
      rotation: 6.3,
    }
});