import React,{Component} from 'react';

class Subject extends Component{
    render(){
      return(
        <header>
          <h1><a href="/" onClick={function(e){
          e.preventDeafult();
          this.props.onChangePage();
          }}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;