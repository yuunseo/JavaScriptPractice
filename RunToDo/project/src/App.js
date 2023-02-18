import './App.css' //스타일 설정해 줄 css 파일
import React,{Component} from 'react'
import TOC from './components/TOC'
import Subject from './components/Subject'
import ReadContent from './components/ReadContent'
import Control from './components/Control'
import CreateContent from './components/CreateContent'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'create',
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
    var _title,_desc,_article = null;
    if(this.state.mode === 'Welcome'){
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} /> //게시글을 볼 수 있게 하는 readContent
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
      _article = <ReadContent title={_title} desc={_desc} />
    }else if(this.state.mode='create'){
      _article = <CreateContent/>
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
        <Control onChangeMode={function(mode){
          this.setState({mode:mode});
        }.bind(this)}/>
        {_article}
      </div>
    );
  }
}
export default App;
