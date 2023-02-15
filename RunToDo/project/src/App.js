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

class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperTet Markup Language.
      </article>
    );
  }
}

class App extends Component {
  render(){

    return(
      <div className="App">
        <Subject />
        <TOC />
        <Content />
      </div>
    );
  }
}
export default App;
