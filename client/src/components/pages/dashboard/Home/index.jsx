import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreHome = React.createClass({

  mixins: [ AsyncElement ],
  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },

  bundle: require('bundle?lazy!./Home.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreHome;