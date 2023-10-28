onReady();



function handleSubmit(event) {
    console.log(event);
  
    event.preventDefault();
    let first = document.getElementById('firstName');
    let last = document.getElementById('lastName');
    let id = document.getElementById('empId');
    let title = document.getElementById('empTitle');
    let annualsalary = document.getElementById('salary');
  
    console.log(first, last, id, title, annualsalary);
  
    let tables = document.getElementById('tableBody');
    tables.innerHTML += 
    `<tr>
    <td>${first.value}</td>
    <td>${last.value}</td>
    <td>${id.value}</td>
    <td>${title.value}</td>
    <td>${annualsalary.value}</td>
    <td><button onclick="deleteText(event)">␡</button></td>
     </tr>`
     first.value = ""
     last.value = ""
     id.value = ""
     title.value = ""
     annualsalary.value = ""
    
  }
  function deleteText(event) {
    event.target.parentElement.parentElement.remove();
  }
    
    




  function onReady() {
    console.log('Javascript is working!');
  }