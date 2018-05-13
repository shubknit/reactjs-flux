import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import AddressList from './AddressList';
import StoresList from './StoresList';
import ToDoStore from '../stores/ToDoStore';
import * as ToDoActions from '../actions/ToDoActions';

export default class Layout extends React.Component{
  constructor(){
    super();
    this.name = "shub";
    this.state ={
      todos : ToDoStore.getAll()
    }
  }
  getVal(){
    return 'Jarry'
  }

  componentWillMount(){
    console.log("component mounted");
    ToDoStore.on('change', () => {
      console.log("changed");
      this.setState({
        todos: ToDoStore.getAll()
      })
    });
  }
  createTodo(){
    ToDoActions.createTodo(Date.now());
  }

  render(){
    console.log(this.props);
    const {query} = this.props.location;
    const {data,filter} = query;
    const inlineStyle = {
      marginTop: '10px',
      background: 'yellow'
    };
    const locationList = [
      "Newyork",
      "Greece",
      "New Jersey",
      "San Fransico"
    ].map((title,i) => <AddressList key={i} title={title}> </AddressList>);

    const { todos } = this.state;
    const toDoStoreList = todos.map((list,i) => <StoresList key={list.id} title={list.text}></StoresList>);
     return(
      <div>
        <Link to ={'/'}>Home </Link>
        <h1>Contactus {this.getVal()}</h1>
        <p style ={inlineStyle}>data: {data} filter: {filter}</p>
        <h3>Data from component</h3>
        <div className="row">{locationList}</div>
        <button onClick = {this.createTodo.bind(this)}> Create</button>
        <h3> Data from Flux Stores </h3>
        <div className="row">{toDoStoreList}</div>
      </div>
    )
  }
}
