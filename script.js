onReady();

function onReady() {
    console.log('Javascript is working!');
}

let totalMonthly = 0;

function handleSubmit(event) {
    console.log("test");
    event.preventDefault();

    let first = document.getElementById('firstName').value;
    let last = document.getElementById('lastName').value;
    let id = document.getElementById('empId').value;
    let title = document.getElementById('empTitle').value;
    let annualSalary = document.getElementById('salary').value;

    tableBody.innerHTML +=
        `<tr>
    <td>${first}</td>
    <td>${last}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td><button onclick="deleteText(event)">❌</button></td>
     </tr>`
    firstName.value = ""
    lastName.value = ""
    empId.value = ""
    empTitle.value = ""
    salary.value = ""

    totalMonthly += Number(annualSalary);
    document.getElementById('totalBudget')
    if (totalMonthly > 20000) {
        totalBudget.innerHTML = `<p class='over-budget'> ${totalMonthly}</p>`
    }
    else { totalBudget.innerHTML = `<p>${totalMonthly}</p>` };





}
function deleteText(event) {
    event.target.parentElement.parentElement.remove();
}



