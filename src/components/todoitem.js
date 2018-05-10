var React = require('react');

require('../css/todoitem.css')
var ToDoListItem = React.createClass({
	render: function(){
		return(
			<li>
      <div className="todo-item">
                 <span className="item-name">{this.props.item}</span>
                 <span className="item-remove" onClick={this.handleDeleteItem}> x </span>
             </div>

			</li>
		)
	},
	handleDeleteItem: function(){
		this.props.onDelete(this.props.item);
	}

});
module.exports = ToDoListItem;
