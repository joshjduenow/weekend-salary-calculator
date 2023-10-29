onReady();

let totalMonthly = 0;


function handleSubmit(event) {
    console.log("test");

    event.preventDefault();
    let first = document.getElementById('firstName').value;
    let last = document.getElementById('lastName').value;
    let id = document.getElementById('empId').value;
    let title = document.getElementById('empTitle').value;
    let annualSalary = document.getElementById('salary').value;
    let budget = document.getElementById('totalBudget').value;
    

    document.getElementById('tableBody').innerHTML +=
     `<tr>
    <td>${first}</td>
    <td>${last}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td><button onclick="deleteText(event)">❌</button></td>
     </tr>`
    // first.value = ""
    // last.value = ""
    // id.value = ""
    // title.value = ""
    // annualSalary.value = ""

    totalMonthly += Number(annualSalary);
    document.getElementById('totalBudget').textContent = Number(totalMonthly);
    if(totalMonthly > 20000){
        totalBudget.innerHTML = `<p class='inRed'> ${totalMonthly}</p>`}
         else {totalBudget.innerHTML = `<p>${totalMonthly}</p>`};

 }
function deleteText(event) {
    event.target.parentElement.parentElement.remove();
}

//   function addTotalMonthly() {
//     let budget = document.getElementById('totalBudget');
//     console.log("Am I balancing a budget",budget);

//     budget.innerHTML +=

//     totalMonthly+=annualSalary;
//   }






function onReady() {
    console.log('Javascript is working!');
}