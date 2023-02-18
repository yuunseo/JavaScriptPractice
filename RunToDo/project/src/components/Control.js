import React,{Component} from 'react';

class Control extends Component{
    render(){
      return(
        <ul>
          <li><a href="/create" onClck={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>
          <li><a href="/update" onClck={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          <li><input type="button" value="delete" onClck={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)}></input></li>
        </ul>
      );
    }
  }

  export default Control;