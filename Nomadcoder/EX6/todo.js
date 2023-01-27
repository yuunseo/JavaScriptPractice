const toDoForm = document.querySelector("#todo-form"); //todo form요소 가져오기
const toDoList = document.querySelector("#todo-list"); //todo list 요소 가져오기
const toDoInput = toDoForm.querySelector("input"); //todo form의 input 요소 가져오기

function deleteToDo(event){
    const li = event.target.parentElement ; //버튼 누르면, 어떤 버튼이 눌렸는지 확인
    li.remove();
}

function paintToDo(newTodo){
    //작성한 투두를 이용해서 투두리스트를 그릴 함수
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");//지울 버튼 생성하기
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText=newTodo;
    button.innerText="❌";
    console.log(li);
    //작성한 투두를 li에 넣을 거니까 li공간과 span공간을 만들고, span에 넣음
    //이젠 li를 toDoList에 넣어줄거야 넣기 전까지는 화면에서 보이지 않는다
    toDoList.appendChild(li);
    //새로고침하면 다 날라감


}

function handleToDoSubmit(event){
    //submit할 때, 실행할 동작을 함수로 만들기
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    paintToDo(newTodo);
}
toDoForm.addEventListener("submit",handleToDoSubmit); //todo form의 submit 동작 제어하기
