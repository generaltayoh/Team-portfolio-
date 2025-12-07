/* variables*/
 const inputTask = document.getElementById('input-task');
 const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');

inputTask.addEventListener('keydown', function(event){
    if(event.key === 'Enter')
{
    addTask.click();
}
});
 addTask.addEventListener('click',function(){
let task =document.createElement('div');
task.classList.add('task');

let li =document.createElement('li');
li.innerText = `${inputTask.value}`;
task.appendChild(li);

let checkButton = document.createElement('button')
checkButton.innerText='✔';
checkButton.classList.add('check');
task.appendChild(checkButton);

let trashButton = document.createElement('button')
trashButton.innerText= '❌'
trashButton.classList.add('trash');
task.appendChild(trashButton);

if(inputTask.value ===""){
    alert('Please enter task')
}
else{
    taskContainer.appendChild(task);
}
inputTask.value = "";

checkButton.addEventListener('click',function(){
   li.classList.toggle('Uncheck');
});
trashButton.addEventListener('click',function(e){
     let target = e.target;
     target.parentElement.remove();
})
 });