/*!
    * Start Bootstrap - SB Admin v7.0.4 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 
let davood="hosseini",mahdie="moosavi";
console.log(davood);

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


  function addMoreRows() {
var rowsAdded = document.getElementById('datatablesSimple');

        for(var x=0; x<100; x++) {
          var newRow = document.getElementById('datatablesSimple').insertRow();

          var newCell = newRow.insertCell();
          newCell.innerHTML="<tr><td><input type='text' name='user_name'></td></tr>";

          newCell = newRow.insertCell();
          newCell.innerHTML="<tr><td><input type='text' name='score'></td></tr>";

          newCell = newRow.insertCell();
          newCell.innerHTML="<tr><td><input type='text' name='points'></td></tr>";

          newCell = newRow.insertCell();
          newCell.innerHTML="<tr><td><input type='text' name='total'></td></tr>";
      }
  }



var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


  const select_options = {};

    for (let j=1; j<10;j++){
      select_options["value"+j]=j
      }
    
  

  
  

// for(var i=1; i<15 ;i++);
// {
var i=1;
var select = document.getElementById("select-filter"+i);
for(index in select_options) {
    select.options[select.options.length] = new Option(select_options[index], index);
}
// }



var submit_button= document.getElementById("submitdata");
submit_button.addEventListener("click",submit_data());

function submit_data()
{
  console.log("hi");
}

const no_of_rows=150;
const no_of_columns=21;
var table=document.getElementById("datatablesSimple");
for (let k=2; k<no_of_rows;k++){
  var row = table.insertRow(k);
  for (let c=0; c<no_of_columns;c++){
    var cell1 = row.insertCell(c);
    cell1.innerHTML = "Data"+k+","+c;
  }
}




//function addRowHandlers() {
var rows = document.getElementById("datatablesSimple").rows;
console.log(rows.length)
// rows[2].addEventListener("click",myFunction(2));
  //   for (i = 0; i < rows.length; i++) {
   //rows[2].onclick=myFunction(i);
  // }


  //window.onload = addRowHandlers();

  function myFunction(x) {
    alert("Row index is: " + x.rowIndex);
  }



function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("select-filter1");
  filter = input.value.toUpperCase();
  table = document.getElementById("datatablesSimple");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

