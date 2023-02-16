import './App.css'; //스타일 설정해 줄 css 파일
import React,{Component} from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  render(){

    return(
      <div className="App">
        <Subject title ="WEB" sub="*:. world wide web .:*"/>
        <TOC />
        <Content />
      </div>
    );
  }
}
export default App;
