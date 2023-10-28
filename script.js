onReady();

let totalMonthly = 0;


function handleSubmit(event) {
    console.log(event);
  
    event.preventDefault();
    let first = document.getElementById('firstName');
    let last = document.getElementById('lastName');
    let id = document.getElementById('empId');
    let title = document.getElementById('empTitle');
    let annualSalary = document.getElementById('salary');
    let budget = document.getElementById('totalBudget');
  
    console.log(first, last, id, title, annualSalary, budget);
  
    let tables = document.getElementById('tableBody');
    tables.innerHTML += 
    `<tr>
    <td>${first.value}</td>
    <td>${last.value}</td>
    <td>${id.value}</td>
    <td>${title.value}</td>
    <td>${annualSalary.value}</td>
    <td><button onclick="deleteText(event)">❌</button></td>
     </tr>`
     first.value = ""
     last.value = ""
     id.value = ""
     title.value = ""
     annualSalary.value = ""

     totalMonthly += 0;
     console.log(totalMonthly);
     document.getElementById('totalBudget').textContent = totalMonthly

    
  }
  function deleteText(event) {
    event.target.parentElement.parentElement.remove();
  }

//   function addTotalMonthly() {
//     let budget = document.getElementById('totalBudget');
//     console.log("Am I balancing a budget",budget);

//     budget.innerHTML +=

//     totalMonthly++;
//   }
    
    




  function onReady() {
    console.log('Javascript is working!');
  }