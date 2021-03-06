import React from 'react';
// import Router from 'react-router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

var AsyncElement = {
  loadedComponent: null,

  load: function () {

    if (this.constructor.loadedComponent){
      return;
    }

    NProgress.start();
    
    this.bundle(function (component) {
      NProgress.done();
      this.constructor.loadedComponent = component;
      this.forceUpdate();
    }.bind(this));
  },

  componentDidMount: function() {
    this.load();
  },

  render: function () {
    var Component = this.constructor.loadedComponent;
    if (Component) {
      // can't find RouteHandler in the loaded component, so we just grab
      // it here first.
      // this.props.activeRoute = <RouteHandler/>;
      this.props.activeRoute = this.props.children;
      return <Component {...this.props}/>;
    }
    return this.preRender();
  }
};

export default AsyncElement;