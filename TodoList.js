
// function init(){
//   callToAction();
// };


// function callToAction(){
//   document.querySelector('.icon-add').addEventListener('click', addTodoList)
// };


// function addTodoList(){
//   console.log("click sur icon add")
//   const inputTodolist = document.querySelector('#todolist');
//   const displayTodolist = document.querySelector('.displayTodolist');

//   const txt = inputTodolist.value

//   const newList = new TodoList();

//   displayTodolist.appendChild(newList);
// };


// init();


class TodoList extends HTMLElement {
  constructor(){
    super();

    const template = document.getElementById('list').content;
    const clone = document.importNode(template, true);

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(clone);

    this.iconClose = this.shadowRoot.querySelector('.icon-close');
    this.iconClose.addEventListener('click', function(){
      console.log('click')
    });


    this.callToAction()
  }

  callToAction(){
    document.querySelector('.icon-add').addEventListener('click', this.addTodoList);
  };
  
  
  addTodoList(){
    console.log("click sur icon add")
    const inputTodolist = document.querySelector('#todolist');
    const displayTodolist = document.querySelector('.displayTodolist');
  
    const txt = inputTodolist.value;
  
    displayTodolist.appendChild(newList);
  };

 
}

customElements.define('todo-list', TodoList);