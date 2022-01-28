// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example

var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["VI", "VE", "UT", "Ex-MT","Int-MT", "AUT", "PT","Tublar Inspection"],
    datasets: [{
      label: "Completed",
      backgroundColor: "#28a745",
      borderColor:"#28a745",
      data: [4215, 5312, 6251, 7841, 2500, 2100,500,870],
    },
    {
      label: "Particaly Completed",
      backgroundColor: "#FF9200",
      borderColor: "#FF9200",
      data: [2000, 3000, 1600, 4200, 1250, 4200,400,640],
    },
    {
      label: "Canceled",
      backgroundColor: "#ffc107",
      borderColor: "#ffc107",
      data: [200, 200, 200, 200, 200, 200,230,870],
    },
    {
      label: "Not Started",
      backgroundColor: "#dc3545",
      borderColor: "#dc3545",
      data: [4215, 5312, 6251, 900, 870, 150,542,357],
    }],
  },
  options: {
    scales: {
      

      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 8
        },
        stacked: true

      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5

        },
        gridLines: {
          display: true
        },

        stacked: true
      }],
    },
    legend: {
      display: true
    }


  }
});




var ctx = document.getElementById("assettypeBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Vessel", "Column", "Filter", "Exchanger","Air Cooler", "Compressor Bottle", "Reboiler","Heater"],
    datasets: [{
      label: "Completed",
      backgroundColor: "#28a745",
      borderColor:"#28a745",
      data: [100, 150, 20, 45, 2, 4,2,1],
    },
    {
      label: "Particaly Completed",
      backgroundColor: "#FF9200",
      borderColor: "#FF9200",
      data: [2, 1, 3, 4, 5, 6,5,7],
    },
    {
      label: "Canceled",
      backgroundColor: "#ffc107",
      borderColor: "#ffc107",
      data: [2, 4, 5, 6, 1, 0,4,1],
    },
    {
      label: "Not Started",
      backgroundColor: "#dc3545",
      borderColor: "#dc3545",
      data: [4, 3, 2, 8, 6, 5,5,1],
    }],
  },
  options: {
    scales: {
      

      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 8
        },
        stacked: true

      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 300,
          maxTicksLimit: 5

        },
        gridLines: {
          display: true
        },

        stacked: true
      }],
    },
    legend: {
      display: true
    }


  }
});