let allButton = document.querySelectorAll('.clickButton');

allButton.forEach(button => {
    button.addEventListener('click',function(event){
        alert('Board update successfully  ')

        event.preventDefault()
        
        
       let add = valueConverted('add');
       let cut = valueConverted('cut');
       let history = document.getElementById('history-container');

       document.getElementById('add').innerText = add + 1 ;
       document.getElementById('cut').innerText = cut - 1 ;
      

        let currentTime = new Date().toLocaleTimeString('en-US');
        
        let headings = document.getElementById('title').innerText ;
        
        let items = document.createElement('p');
        items.classList.add('bg-slate-200', 'p-2', 'rounded', 'm-2');
        items.innerHTML =`
        <h1>you have complete the task </h1>
        <h1> ${headings}</h1>
        <h1> at time : ${currentTime}</h1>
        `;
        history.appendChild(items);

        this.style.backgroundColor =' gray' ;
        this.disabled = true ;
        
        
       
    });
});

let lastButton = allButton[allButton.length - 1]; 
lastButton.addEventListener('click', function(event) {
    event.preventDefault();

   
    alert('Task Completed! ✅');

    updateTask(event, this);
});

document.getElementById('history-btn').addEventListener('click',function(){

    let history = document.getElementById('history-container');
    history.innerHTML = '';
})

document.getElementById('date').innerText = new Date().toLocaleDateString();



