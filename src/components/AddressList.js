import React from 'react';

export default class AddressList extends React.Component{
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
