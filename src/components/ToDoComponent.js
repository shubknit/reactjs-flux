var React = require('react');
var ToDoListItem = require('./todoitem');
var AddItem = require('./additem');
import {Link} from 'react-router';

var ToDoComponent = React.createClass({
	getInitialState: function(){
		return{
			todos : ['wakeup','running' ,'takerest', 'work'],
			age: 30
		}
	},

	render:function(){
		var ageModify = setTimeout(function(){
			this.setState({
				age: 45
			})
		}.bind(this), 2000);

		var todos = this.state.todos;
		todos = todos.map(function(item,index){
			return(
				//<li key={index}>{item} </li> // if not using  nesting components
				<ToDoListItem key={index} item ={item} onDelete ={this.onDelete}/>
			)
		}.bind(this));
		return(
			<div>
				<h1>Weclome to React</h1>
		 		{/* <h2>using props</h2> // commented due to router implementation
				<p> {this.props.msg}</p>
				<ul>
					<li>{this.props.list.name}</li>
				 	<li>{this.props.list.category}</li>
					<li>{this.props.list.age}</li>
				</ul> */}
				<h2>using states</h2>
				<p> {this.state.todos[0]}</p>
				<p> {this.state.age}</p>
				<h3> Life  routine</h3>
				 <div id="todo-list">
				 <Link to ={'/about'}>About </Link>
					<ul>
						{todos}
					</ul>
				 <AddItem addItem = {this.addItem}/>
				</div>

			</div>
		)
	},

	// custom functions
	onDelete: function(item){
		var updatedTodos = this.state.todos.filter(function(val,index){
			return val !== item
		});
		this.setState({
			todos : updatedTodos
		})
	},

	addItem : function(item){
		var updatedList = this.state.todos;
		updatedList.push(item);
		this.setState({
			todos : updatedList
		})
	}
});

module.exports = ToDoComponent;
