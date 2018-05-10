var React = require('react');
require('../css/addItem.css')
var addItem = React.createClass({
  render: function(){
    return(
      <div id="add-todo">
        <input type ="text" ref="newitem" placeholder="additem"/>
        <input type="submit" value="submit" onClick = {this.submitHandler}/>
      </div>
    )
  },
  submitHandler: function(e){
    e.preventDefault();
    var value = this.refs.newitem.value;
    this.props.addItem(value);
  }

});
module.exports = addItem;
