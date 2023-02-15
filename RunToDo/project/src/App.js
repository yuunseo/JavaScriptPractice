import './App.css'; //스타일 설정해 줄 css 파일
import React,{Component} from 'react';

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>WEB</h1>
        *:. world wide web .:*
      </header>
    );
  }
}

class App extends Component {
  render(){

    return(
      <div className="App">
        <Subject />
      </div>
    );
  }
}
export default App;
