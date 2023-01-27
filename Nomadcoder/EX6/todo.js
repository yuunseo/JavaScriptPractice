const toDoForm = document.querySelector("#todo-form"); //todo form요소 가져오기
const toDoList = document.querySelector("#todo-list"); //todo list 요소 가져오기
const toDoInput = toDoForm.querySelector("input"); //todo form의 input 요소 가져오기


function handleToDoSubmit(event){
    //submit할 때, 실행할 동작을 함수로 만들기
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
}
toDoForm.addEventListener("submit",handleToDoSubmit); //todo form의 submit 동작 제어하기