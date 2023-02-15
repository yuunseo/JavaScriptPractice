import logo from './logo.svg';
import './App.css'; //스타일 설정해 줄 css 파일
import React, {useState} from 'react';

function App() {
  let [title,setTitle] = useState(['남자 코드 추천','남자 가방 추천','서울 근교 카페 추천']);
  let [num,setNum] = useState(0);
  function changeTitle(){
    var newArray = [...title];
    newArray[0] = '여자 코트 추천';
    setTitle(newArray);
  }

  function changeSequan(){
    var newArr = [...title];
    newArr[0] = newArr[2];
    newArr[2] = '코트 추천';
    setTitle(newArr);

  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
      </div>
      <button onClick={changeTitle}>카테고리 변경</button>
      <button onClick={changeSequan}>순서 변경</button>
      <div className="list">
        <h3>{title[0]} <span onClick={()=>{setNum(num+1)}}>👍</span>{num}</h3>
        <p>2월 14일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2월 15일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>2월 16일 발행</p>
        <hr/>
      </div>

      <Modal/>
      
      
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )

}
export default App;
