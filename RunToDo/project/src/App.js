import './App.css'; //스타일 설정해 줄 css 파일
import React,{Component} from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Subject:{title:"WEB",sub:"*:. world wide web .:*"}
    }
  }

  render(){
    
    return(
      <div className="App">
        <Subject 
        title ={this.state.Subject.title} 
        sub={this.state.Subject.sub}/>
        <TOC />
        <Content 
        title="HTML" 
        sub="HTML is HyperText Markup Language."/>
      </div>
    );
  }
}
export default App;
