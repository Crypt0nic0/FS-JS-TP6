const form = document.querySelector('form');


function storeList(){
    window.localStorage.todolist = list.innerHTML;
}

function getTodo(){
    if(window.localStorage.todolist)
    {
    list.innerHTML = window.localStorage.todolist;
    }
    else
    {
        list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
    }
}

window.addEventListener('load', getTodo);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    list.innerHTML += `<li>${item.value}</li>`;
    item.value = "";
    storeList();
});

list.addEventListener('click', (e) => {
    if(e.target.classList.contains("checked")){
        e.target.remove();
    }
    else{
        e.target.classList.add("checked");
    }
    storeList();
});

