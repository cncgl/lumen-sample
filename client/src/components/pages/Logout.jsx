var React = require('react');
// var Router = require('react-router');

var LogoutPage = React.createClass({
  componentWillMount: function(){
  },
  
  // mixins: [Router.Navigation],
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render: function(){
    return <div></div>;
  }
});

export default LogoutPage;