let id=1;

function generateToDo(title, description, id){

    const todo=document.createElement("div");
    todo.classList.add("todo-item");
    todo.id=id;

    const todoBody=document.createElement("div");
    todoBody.classList.add("todo-body");

    const todoTitle=document.createElement("div");
    todoTitle.classList.add("todo-title");
    todoTitle.innerHTML=`<h2>${title}</h2>`;

    const todoDescription=document.createElement("div");
    todoDescription.classList.add("todo-description");
    todoDescription.innerHTML=`<h5>${description}</h5>`;

    todoBody.appendChild(todoTitle);
    todoBody.appendChild(todoDescription);
    todo.appendChild(todoBody);

    const button=document.createElement("button");
    button.innerHTML="Remove";
    button.classList.add("remove-btn");
    button.id=`remove-btn-${id}`;


    button.addEventListener('click',(e)=>{
        console.log("function triggered");
        const todoToRemove=e.target.parentElement;
        todoToRemove.remove();
     })  

    todo.appendChild(button);

    return todo;


}


function addToDo(){
    const title=document.querySelector("#todo-title").value;
    const description=document.querySelector("#todo-description").value;
    const container=document.querySelector("#todo-container");
    console.log(description)
    if(title==="" || description===""){
        alert("Please fill all the fields");
        return;
    }

    const todo=generateToDo(title,description,id);
    container.appendChild(todo);
    document.querySelector("#todo-title").value="";
    document.querySelector("#todo-description").value="";
    id++;

}



