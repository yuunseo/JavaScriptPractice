import './App.css'; //스타일 설정해 줄 css 파일
import React,{Component} from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'Welcome',
      Subject:{title:"WEB",sub:"*:. world wide web .:*"},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText Markup Language.'},
        {id:2, title:'CSS', desc:'Css is for design.'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive.'}
      ],
      Welcome:{title:'Welcome~',desc:'Hello, React!'},
    }
  }

  render(){
    var _title,_desc = null;
    if(this.state.mode === 'Welcome'){
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    
    return(
      <div className="App">
        {/*<Subject 
        title ={this.state.Subject.title} 
        sub={this.state.Subject.sub}/>*/}
        <header>
          <h1><a href="/" onClick={function(event){
            console.log(event);
            event.preventDefault();
            this.setState({mode:'Welcome'});
          }.bind(this)}>{this.state.Subject.title}</a></h1>
          {this.state.Subject.sub}
        </header>
        <TOC data={this.state.contents}/>
        <Content 
        title={_title}
        desc={_desc} />
      </div>
    );
  }
}
export default App;
