import './App.css'; //스타일 설정해 줄 css 파일
import React,{Component} from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import Control from './components/Control';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'Welcome',
      selected_content_id:2 ,
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
      var i = 0;
      while(i <this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i+=1;
      }
    }
    
    return(
      <div className="App">
        <Subject 
        title ={this.state.Subject.title} 
        sub={this.state.Subject.sub}
        onChangePage={function(){
          this.setState({mode:'Welcome'});
        }.bind(this)}/>
      
        <TOC 
        data={this.state.contents}
        onChangePage={function(id){
          this.setState({
            mode:"read",
            selected_content_id:Number(id),
          });
        }.bind(this)
        }
        />
        <Control />
        <Content 
        title={_title}
        desc={_desc} />
      </div>
    );
  }
}
export default App;
