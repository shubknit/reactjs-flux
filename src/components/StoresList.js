import React from 'react';
import ReactDOM from 'react-dom';


export default class StoresList extends React.Component{
  constructor(){
    super();
  }
  render(){
    const title = this.props.title
     return(
      <div>
        {title}
      </div>
    )
  }
}
