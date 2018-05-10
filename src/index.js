var React = require('react');
var ReactDOM = require('react-dom');
import {Router,Route,browserHistory, Link} from 'react-router';

// Module imports
var ToDoComponent = require('./components/ToDoComponent');
var AddItem = require('./components/addItem');
var About = require('./components/about');
var contactus = require('./components/contactus').default;
require('./css/index.css')


// Implementation of Router starts

var App = React.createClass({
	render: function(){
		return(
			<Router history={browserHistory}>
				<Route path={'/'} component={ToDoComponent}></Route>
				<Route path ={'/about'} component ={About}></Route>
				<Route path ={'/contactus'} component ={contactus}></Route>
			</Router>
		)
	}
})

// Router Ends





var personList = {name: 'john' ,category : 'general' ,age : 30};

//ReactDOM.render(<ToDoComponent  msg="i like cheese" list = {personList} />, document.getElementById("todo-wrapper"));

// For Router impolementation
ReactDOM.render(<App/>, document.getElementById("todo-wrapper"));
