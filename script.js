onReady();



function handleSubmit(event) {
    console.log(event);
  
    event.preventDefault();
    let first = document.getElementById('firstName');
    let last = document.getElementById('lastNmae');
  
    console.log(author, affirmation);
  
    let tables = document.getElementById('tableBody');
    tables.innerHTML += 
    `<tr>
    <td>${affirmation.value}</td>
    <td>${author.value}</td>
    <td><button onclick="deleteText(event)">❌</button></td>
     </tr>`
     affirmation.value = ""
     author.value = ""
    
  }




  function onReady() {
    console.log('Javascript is working!');
  }