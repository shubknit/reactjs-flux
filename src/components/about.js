var React = require('react');
import {Link} from 'react-router';
var About = React.createClass({
  render:function(){
    return(
      <div>
        <Link to ='/'>Home </Link>
        <Link to ='/contactus'>Next </Link>
        <h2> About me!! </h2>
      </div>
    )
  }
});

module.exports = About;
