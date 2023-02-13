import logo from './logo.svg';
import './App.css'; //스타일 설정해 줄 css 파일

function App() {
  let title = "오늘의 하루는 !?";
  let fonts = {color : 'pink', fontSize : '30px'};
  return (
    <div className="App">
      <div className="black-nav">
        <div style={fonts}>개발 블로그</div>
      </div>
      <img src={logo} />
      <h4>{title}</h4>
    </div>
  );
}

export default App;
