//===============================================
// CHARTS
//===============================================

// LINE GRAPH ===================================

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
      responsive: true,
      maintainAspectRatio: true,
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

const ul = document.getElementById('chart-controls');

function resetButtonClass(){
  let listItems = ul.children;
  
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].className = 'not-selected';
  }
}

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const button = e.target;
    
    if (button.textContent === 'Hourly') {
      console.log('Hourly button pressed');
      resetButtonClass();
      button.className = 'selected';

      lineChart.options.scales.yAxes[0].ticks.max = 100;
      lineChart.options.scales.yAxes[0].ticks.stepSize = 10;
      lineChart.data.labels = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"]
      lineChart.data.datasets[0].data = [5, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20];
      lineChart.update();

    } else if (button.textContent === 'Daily') {
      console.log('Daily button pressed');
      resetButtonClass();
      button.className = 'selected';

      lineChart.options.scales.yAxes[0].ticks.max = 500;
      lineChart.options.scales.yAxes[0].ticks.stepSize = 50;
      lineChart.data.labels = ["Wed", "Thur", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
      lineChart.data.datasets[0].data = [220, 320, 290, 190, 240, 450, 295, 220, 400, 320, 200];
      lineChart.update();

    } else if (button.textContent === 'Weekly') {
      console.log('Weekly button pressed');
      resetButtonClass();
      button.className = 'selected';

      lineChart.options.scales.yAxes[0].ticks.max = 2500;
      lineChart.options.scales.yAxes[0].ticks.stepSize = 500;
      lineChart.data.labels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"]
      lineChart.data.datasets[0].data = [0, 750, 1750, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2000];
      lineChart.update();

    } else if (button.textContent === 'Monthly' ) {
      console.log('Monthly button pressed');
      resetButtonClass();
      button.className = 'selected';

      lineChart.options.scales.yAxes[0].ticks.max = 10000;
      lineChart.options.scales.yAxes[0].ticks.stepSize = 1000;
      lineChart.data.labels = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"]
      lineChart.data.datasets[0].data = [2000, 4302, 2503, 5063, 4032, 2853, 4063, 5024, 8063, 5605, 7059];
      lineChart.update();
    }
  }
});


// BAR CHART ====================================

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
      responsive: true,
      maintainAspectRatio: true,
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


// DOUGHNUT CHART ===============================

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
      responsive: true,
      maintainAspectRatio: true,
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


//===============================================
// AUTOCOMPLETE + MESSAGE
//===============================================

// MESSAGE SUBMIT ===============================

const userField = document.getElementById('search-user-field');
const messageField = document.getElementById('message-user-field');
const messageSubmit = document.getElementById('message-submit');

messageSubmit.addEventListener('click', (e) => {
  if (userField.value == '' && messageField.value == '') {
    window.alert('Please enter a valid user and message');
  } else if (userField.value == '') {
    window.alert('Please enter a valid username');
  } else if (messageField.value == '') {
    window.alert('Please enter a message to send');
  } else {
    window.alert('Success! Message sent to ' + userField.value);
    userField.value = "";
    messageField.value = "";
  }
});


// AUTOCOMPLETE =================================

function autocomplete(inp, arr) {
  
  // Add an event listener to the input field and run this function when an input event is triggered.
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      
      // Run the CloseAllLists function to close any already open auto-complete lists.
      closeAllLists();
      if (!val) {
        return false;
      }
      
      // Create a DIV element in the variable 'a' that will contain the auto complete list.
      // Give it the ID 'FIEDLNAME + autocomplete-list' and class 'autocomplete-items'.
      // Append the newly created div onto the field's parent node ("this").
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);

      // Cycle through each of the names in the array of user names.
      for (i = 0; i < arr.length; i++) {
        
        // If the first letter in the name matches the value of the user input, then create a new DIV in the variable 'b'.
        // Set the div's inner HTML to "<strong> matching letters </strong>" to highlight the matching letters.
        // Append the remaining letters inside the div to give the full name of the matching user.
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

          // Add an event listener to the newly created element ready for a click. 
          // If the element is clicked on, add its value to the user field ("this") and close all remaining lists.
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });

          // Append the newly created div 'b' onto the parent element 'a'.
          a.appendChild(b);
        }
      }
  });

  // Function to close the autocomplete list.
  // Collects items in the list in an array 'x' and removes them, unless they match the element passed in.
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  // When the list is active, listen for a click anywhere else and close the list.
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

const userNames = [
  'Adams',
  'Baker',
  'Clark',
  'Davis',
  'Evans',
  'Frank',
  'Ghosh',
  'Hills',
  'Irwin',
  'Jones',
  'Klein',
  'Lopez',
  'Mason',
  'Nalty',
  'Ochoa',
  'Patel',
  'Quinn',
  'Reily',
  'Smith',
  'Trott',
  'Usman',
  'Valdo',
  'White',
  'Xiang',
  'Yakub',
  'Zafar', 
];

autocomplete(userField, userNames);


//===============================================
// ALERT NOTIFICATION
//===============================================

const alertBar = document.getElementById('alert-bar');
const removeButton = document.getElementById('alert-bar').lastElementChild;

removeButton.addEventListener('click', (e) => {
  console.log('remove button has been clicked');
  alertBar.style.display = 'none';
});


//===============================================
// LOCAL STORAGE
//===============================================

let emailPref = document.getElementById('email-pref');
let profilePref = document.getElementById('profile-pref');
let timezonePref = document.getElementById('timezone-pref');


// INITIALISATION ===============================

if (localStorage.emailPref === undefined || localStorage.emailPref === undefined) {
  localStorage.emailPref = 'true';
  localStorage.profilePref = 'false';
}

if (localStorage.timezonePref === null) {
  timezonePref.value = "Please choose a timezone";
} else {
  timezonePref.value = localStorage.timezonePref;
}


// SAVE TO LOCAL STORAGE ========================

const savePrefButton = document.getElementById('save-pref-button');
const cancelPrefButton = document.getElementById('cancel-pref-button');

savePrefButton.addEventListener('click', ()=>{
  localStorage.setItem('emailPref', emailPref.checked);
  localStorage.setItem('profilePref', profilePref.checked);
  localStorage.setItem('timezonePref', timezonePref.value);
});

cancelPrefButton.addEventListener('click', () => {
	localStorage.clear();
});


//===============================================
// SHOW / HIDE NOTIFICATIONS
//===============================================

const notificationBell = document.getElementById('alert-bell');
const notificationContainer = document.getElementById('alert-container');
notificationContainer.style.display = 'none';

notificationBell.addEventListener('click', (e) => {
  
  if (notificationContainer.style.display === 'none') {
    notificationContainer.style.display = 'block';
  } else {
    notificationContainer.style.display = 'none';
  }
});