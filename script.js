window.addEventListener('DOMContentLoaded', () => {

  console.log('script.js chargé');

  let nameStorage = [];
  let data = [];

  function init() {
    callToAction();
    setData();
  };


  function listCreatedAt(){

    const displayDate = document.querySelector('.displayDate')

    let date = new Date();
    let day = date.getDay() + 1;
    if (day.toString().length === 1) {
     day = '0' + day;
    } 
      
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let hour = date.getHours();
    if (hour.toString().length === 1) {
      hour = '0' + hour
     } 

    let minutes = date.getMinutes();
    if (minutes.toString().length === 1) {
      minutes = '0' + minutes.toString();
     } 

    const txt = `Liste créee le ${day}/${month}/${year} à ${hour}h${minutes}`;

    displayDate.textContent = txt;

  }


  function callToAction() {

    document.querySelector('.icon-add').addEventListener('click', addTodoList);

    window.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') return addTodoList()
    });

  };


  function addTodoList() {
    const inputTodolist = document.querySelector('#todolist');
    const displayTodolist = document.querySelector('.displayTodolist');

    if (inputTodolist.value === '') return alert("Il n'y a rien à ajouter !");

    listCreatedAt();
    const p = document.createElement('p');
    p.classList.add('list');
    p.textContent = inputTodolist.value;

    const i = document.createElement('i');
    i.classList.add('icon-close', 'fas', 'fa-times-circle');

    p.appendChild(i)

    displayTodolist.insertBefore(p, displayTodolist.firstChild)

    setTimeout(() => {
      p.classList.add('transition');
    }, 200);


    localStorage.setItem(inputTodolist.value, inputTodolist.value)

    inputTodolist.value = '';

    document.querySelector('.icon-close').addEventListener('click', removeTodoList(displayTodolist, i))
  };


  function removeTodoList(displayTodoList, i) {

    i.addEventListener('click', function (event) {
      console.log(event.target)
      console.log(displayTodoList.childNodes);
      displayTodoList.removeChild(event.target.parentElement)
      const item = event.target.parentElement.textContent;
      if (data.includes(item)){
        localStorage.removeItem(item);
      }
    });

  };


  function setData() {

    for(let prop in localStorage){
      if (prop === localStorage[prop]){
        data.push(prop);
      }
    }

    data.forEach(element => {
      nameStorage.push(localStorage.getItem(element));
      // nameStorage = nameStorage.reverse()
    });

    
    if (nameStorage.length === 0) {
      console.log(localStorage)
      return console.log("Aucun stockage local détecté")
    }

    else {
      console.log(localStorage)
      console.log("Stockage local détecté")
      const displayTodolist = document.querySelector('.displayTodolist');

      
      for(let list of nameStorage){
        
        const p = document.createElement('p');
        p.classList.add('list');
        p.textContent = list;
        p.classList.add('transition');
  
        const i = document.createElement('i');
        i.classList.add('icon-close', 'fas', 'fa-times-circle');
  
        p.appendChild(i)
        
        displayTodolist.appendChild(p)
        removeTodoList(displayTodolist, i);
      }

    }

  }

  init();

});