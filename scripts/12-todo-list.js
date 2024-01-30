const todoList=[
    {name:'make dinner'
    ,dueDate: '2024-1-29'
    },
    {name:'wash dishes',
     dueDate:'2024-1-30'
    }
];
//this function shows the list of todo stuffs we had so far
function renderTodoList(){
    let todoListHTML ='';


    todoList.forEach(function(todoObject,index){
        const {name, dueDate}= todoObject;
        //we can assign an object in js as an element in html using ``
        //within `` , we can work it as multi-type value, if we wanna get an object or variable, use ${}
        //it was together but i separate them into 3 div so we can use grid column ccs
        const html= `<div>
        ${name} </div>

        <div> ${dueDate} </div>

        <button onClick="
            todoList.splice(${index},1);
            renderTodoList();
        " class="delete-todo-buttom">Delete</button>
        
        
        `;
        todoListHTML+=html;

    });
    //query helps access html element to JS, .innerHTML access the thing inside that element (after the first <>....)
    //this part shows the whole list of what we had so far
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement =document.querySelector('.js-due-date-input');

    const name= inputElement.value;
    const dueDate= dateInputElement.value;
    todoList.push({
        //name:name,
        //dueDate :dueDate
        name,
        dueDate,
    });

    inputElement.value=' ';
    //after each add, we display a new list
    renderTodoList();
}