// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example


var ctx = document.getElementById("InspectionstatusPiechart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Innitiated", "Not Started1", "Canceled", "Completed"],
    datasets: [{
      data: [12.21, 4, 11.25, 50],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

var ctx = document.getElementById("PieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Innitiated", "Not Started1", "Canceled", "Completed"],
    datasets: [{
      data: [6, 2, 11.25, 50],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});


