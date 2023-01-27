const toDoForm = document.querySelector("#todo-form"); //todo form요소 가져오기
const toDoList = document.querySelector("#todo-list"); //todo list 요소 가져오기
const toDoInput = toDoForm.querySelector("input"); //todo form의 input 요소 가져오기
let toDos =[]; //localstorage에 넣을라고

const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
} 

function deleteToDo(event){
    const li = event.target.parentElement ;//버튼 누르면, 어떤 버튼이 눌렸는지 확인
    li.remove(); 
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));//눌린 버튼의 id와 지울 id가 다른것들만 가져오자(같은거 지우는 역할)
    saveToDos(); //지운거 저장하기
   
}

function paintToDo(newTodo){
    //작성한 투두를 이용해서 투두리스트를 그릴 함수
    const li = document.createElement("li");
    li.id =  newTodo.id; //각자 투두에 id달기
    const span = document.createElement("span");
    const button = document.createElement("button");//지울 버튼 생성하기
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText=newTodo.text;
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
    //단순히 투두만 넘기지 말고, 랜덤 id값과 같이 넘겨서 서로 구별할 수 있게 하자
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit); //todo form의 submit 동작 제어하기

function syaHello(item){
    
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //기존거 사라지지 않고, 추가되게 하기
    parsedToDos.forEach(paintToDo);
}