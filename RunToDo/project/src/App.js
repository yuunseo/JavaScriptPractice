import logo from './logo.svg';
import './App.css'; //스타일 설정해 줄 css 파일
import React, {useState} from 'react';

function App() {
  let [title,setTitle] = useState(['남자 코드 추천','여자 가방 추천','서울 근교 카페 추천']);
  let [num,setNum] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
      </div>
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
      
      
    </div>
  );
}

export default App;
