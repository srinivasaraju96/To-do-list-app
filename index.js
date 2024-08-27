let task=document.querySelector("#input-task");
let buttonEle=document.querySelector("#button");
let output=document.querySelector(".task-list");
buttonEle.addEventListener('click',toDoApp);
output.addEventListener('change',toDoTaskDelete);
output.addEventListener('click',handleDeleteButton);

function toDoApp(){
    if(task.value !=""){
        if(output.children.length<10){
            let taskContainer=document.createElement("div")
            taskContainer.classList.add("tasklist-class")
            let taskCheckbox=document.createElement("input")
            taskCheckbox.type="checkbox";
            taskCheckbox.classList.add("check-class")
            let taskValue=task.value;
            let taskEle=document.createElement("p");
            taskEle.classList.add("text-class");
            taskEle.textContent=taskValue;
            let delButton=document.createElement("button")
            delButton.innerHTML="Del";
            delButton.style.display="none";
            delButton.classList.add("button-class");
            taskContainer.appendChild(taskCheckbox);
            taskContainer.appendChild(taskEle);
            taskContainer.appendChild(delButton);
            output.appendChild(taskContainer);
            task.value="";
        }
        else{
            alert("Only 10 tasks areallowed at a time");
        }
    }
    else{
        alert("Task cannot be empty");
    }
}

function toDoTaskDelete(event){
    if(event.target.type=="checkbox"){
        let delBtn=event.target.parentElement.querySelector(".button-class");
        if(event.target.checked){
            delBtn.style.display="block";
        }
        else{
            delBtn.style.display="none";
        }
    }
}
function handleDeleteButton(event){
    if(event.target.classList.contains("button-class")){
        const taskDelete=event.target.parentElement;
        output.removeChild(taskDelete);
    }
}