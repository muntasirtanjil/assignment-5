let allButton = document.querySelectorAll('.clickButton');

allButton.forEach(button => {
    button.addEventListener('click',function(){
        alert('Board update successfully  ')

        
        
       let add = document.getElementById('add');
       let cut = document.getElementById('cut');
       let history = document.getElementById('history-container');

       add.innerText = parseInt(add.innerText) + 1 ;
       cut.innerText = parseInt(cut.innerText) - 1 ;

     
        let currentTime = new Date().toLocaleTimeString();
        let  card = this.parentElement;
        let headings = document.querySelector('.heading').innerText ;
        let heading = card.headings;
        let items = document.createElement('p');
        items.classList.add('bg-slate-200', 'p-2', 'rounded', 'mb-2');
        items.innerHTML =`
        <h1>you have complete the task </h1>
        <h1> ${heading}</h1>
        <h1> at time : ${currentTime}</h1>
        `;
        history.appendChild(items);

        this.style.backgroundColor =' gray' ;
        this.disabled = true ;
        
        
       
    });
});

document.getElementById('history-btn').addEventListener('click',function(){

    let history = document.getElementById('history-container');
    history.innerHTML = '';
})

document.getElementById('date').innerText = new Date().toLocaleDateString();



