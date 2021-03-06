import React from 'react';
// import Router, { Link, RouteHandler } from "react-router";
import { Link } from 'react-router';

// import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import {Navbar, Nav, NavDropdown, MenuItem, ProgressBar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import $ from 'jquery';
import classNames from 'classnames';

var HomePage = React.createClass({
    
  componentWillMount: function() {
    this.setState({Height: $(window).height()});
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function(){
    
    $(window).unbind('resize',this.adjustResize);

  },

  getInitialState: function(){
    
    return {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true
    };

  },

  toggleMenu: function(){
    if($(".navbar-collapse").hasClass('collapse')){
      $(".navbar-collapse").removeClass('collapse');  
    }
    else{
      $(".navbar-collapse").addClass('collapse');
    }
  },

  render: function() {

    return (
        <div id="wrapper" className="content">
          <Navbar brand={<span><img src={require('../../../common/img/logo.png')} alt="Start React" title="Start React" />
            <span>&nbsp;SB Admin React - </span>
            <a href="http://startreact.com/" title="Start React" rel="home">StartReact.com</a>
            <button type="button" className="navbar-toggle" onClick={this.toggleMenu} style={{position: 'absolute', right: 0, top: 0}}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            </span>} fluid={true}  style={ {margin: 0} }>
            <ul className="nav navbar-top-links navbar-right">
              <Nav style={ {margin: 0} }>
                <NavDropdown title={<i className="fa fa-envelope fa-fw" />} id="nav-dropdown-1">
                  <MenuItem eventKey="1">
                    <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div> 
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">
                    <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div> 
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="3">
                    <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div> 
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div> 
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">
                    <strong>Read All Messages</strong> <i className="fa fa-angle-right" />
                  </MenuItem>
                </NavDropdown>
                <NavDropdown title={<i className="fa fa-tasks fa-fw" />} id="nav-dropdown-2">
                  <MenuItem eventKey="1" style={ {width: 300} }>
                    <div> 
                      <p> <strong>Task 1</strong> <span className="pull-right text-muted">40% Complete</span> </p> 
                      <div>
                        <ProgressBar active bsStyle="success" now={40} /> 
                      </div> 
                    </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="2">
                    <div> 
                      <p> <strong>Task 2</strong> <span className="pull-right text-muted">20% Complete</span> </p> 
                      <div>
                        <ProgressBar active bsStyle="info" now={20} />
                      </div> 
                    </div> 
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="3">
                    <div> 
                      <p> <strong>Task 3</strong> <span className="pull-right text-muted">60% Complete</span> </p> 
                      <div>
                        <ProgressBar active bsStyle="warning" now={60} />
                      </div> 
                    </div> 
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="4">
                    <div> 
                      <p> <strong>Task 4</strong> <span className="pull-right text-muted">80% Complete</span> </p> 
                      <div>
                        <ProgressBar active bsStyle="danger" now={80} />
                      </div> 
                    </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="5">
                      <strong>See All Tasks</strong> <i className="fa fa-angle-right" />
                  </MenuItem>
                </NavDropdown>

                <NavDropdown title={<i className="fa fa-bell fa-fw" />} id="nav-dropdown-3">
                  <MenuItem eventKey="1" style={ {width: 300} }>
                    <div> <i className="fa fa-comment fa-fw" /> New Comment <span className="pull-right text-muted small">4 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="2">
                    <div> <i className="fa fa-twitter fa-fw" /> 3 New Followers <span className="pull-right text-muted small">12 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="3">
                    <div> <i className="fa fa-envelope fa-fw" /> Message Sent <span className="pull-right text-muted small">4 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="4">
                    <div> <i className="fa fa-tasks fa-fw" /> New Task <span className="pull-right text-muted small">4 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="5">
                    <div> <i className="fa fa-upload fa-fw" /> Server Rebooted <span className="pull-right text-muted small">4 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="6">
                    <strong>See All Alerts</strong> <i className="fa fa-angle-right" />
                  </MenuItem>
                </NavDropdown>

                <NavDropdown title={<i className="fa fa-user fa-fw" />} id="nav-dropdown-4">
                  <MenuItem eventKey="1">
                    <i className="fa fa-user fa-fw" /> User Profile
                  </MenuItem> 
                  <MenuItem eventKey="2">
                    <i className="fa fa-gear fa-fw" /> Settings
                  </MenuItem> 
                  <MenuItem eventKey="3" href="http://www.strapui.com/" onclick={() => { window.location='http://www.strapui.com/'; }}>
                    <i className="fa fa-eye fa-fw" /> Premium React Themes
                  </MenuItem> 
                  <MenuItem divider />
                  <LinkContainer to="login">
                    <MenuItem eventKey="4">
                      <i className="fa fa-sign-out fa-fw" /> Logout
                    </MenuItem>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </ul> 
            <div className="navbar-default sidebar" style={ { 'marginLeft': '-20px' } } role="navigation">
              <div className="sidebar-nav navbar-collapse">
                <ul className="nav in" id="side-menu">
                  <li className="sidebar-search">
                    <div className="input-group custom-search-form">
                      <input type="text" className="form-control" placeholder="Search..." />
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button">
                          <i className="fa fa-search" />
                        </button>
                      </span>
                    </div>
                  </li>

                  <li>
                    <Link to="/home"><i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard</Link>
                  </li>
                        
                  <li className={classNames({'active': !this.state.chartsElementsCollapsed})}>
                    <a href="javascript:void(0)" onClick={ () => { this.setState({chartsElementsCollapsed: !this.state.chartsElementsCollapsed}); return false; } }>
                      <i className="fa fa-bar-chart-o fa-fw" /> &nbsp;Charts<span className="fa arrow" />
                    </a>
                    <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.chartsElementsCollapsed})}>
                      <li>
                        <Link to="/flot-charts">Flot Charts</Link>
                      </li>
                      <li>
                        <Link to="/morrisjs-charts">Morris.js Charts</Link>
                      </li>
                    </ul>
                  </li>
              
                  <li> 
                    <Link to="/tables"><i className="fa fa-table fa-fw" /> &nbsp;Tables</Link>
                  </li> 
              
                  <li> 
                    <Link to="/forms"><i className="fa fa-edit fa-fw" /> Forms</Link>
                  </li>
                    
                  <li className={classNames({'active': !this.state.uiElementsCollapsed})}> 
                    <a href="javascript:void(0)" onClick={ () => { this.setState({uiElementsCollapsed: !this.state.uiElementsCollapsed}); return false; } }><i className="fa fa-edit fa-fw"></i> UI Elements<span className="fa arrow"></span></a> 

                    <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.uiElementsCollapsed})}>
                      <li>
                        <Link to="/panels-wells">Panels and Wells</Link>
                      </li>
                      <li>
                        <Link to="/buttons">Buttons</Link>
                      </li>
                      <li>
                        <Link to="/notifications">Notifications</Link>
                      </li>
                      <li>
                        <Link to="/typography">Typography</Link> 
                      </li>
                      <li>
                        <Link to="/icons"> Icons</Link>
                      </li>
                      <li>
                        <Link to="/grid">Grid</Link>
                      </li>
                    </ul>
                  </li>
                    
                  <li className={classNames({'active': !this.state.multiLevelDropdownCollapsed})}>
                    <a href="javascript:void(0)" onClick={ () => { this.setState({multiLevelDropdownCollapsed: !this.state.multiLevelDropdownCollapsed}); return false; } }>
                      <i className="fa fa-sitemap fa-fw" />&nbsp;Multi-Level Dropdown<span className="fa arrow" />
                    </a>
                    <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.multiLevelDropdownCollapsed})}>
                      <li>
                        <a href="javascript:void(0)">Second Level Item</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Second Level Item</a>
                      </li>
                      <li className={classNames({'active': !this.state.thirdLevelDropdownCollapsed})}>
                        <a href="javascript:void(0)" onClick={ () => { this.setState({thirdLevelDropdownCollapsed: !this.state.thirdLevelDropdownCollapsed}); return false; } }>
                          Third Level<span className="fa arrow" />
                        </a>
                        <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.thirdLevelDropdownCollapsed})}>
                          <li>
                            <a href="javascript:void(0)">Third Level Item</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Third Level Item</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Third Level Item</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Third Level Item</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li> 
                    
                  <li className={classNames({'active': !this.state.samplePagesCollapsed})}>
                    <a href="javascript:void(0)" onClick={ () => { this.setState({samplePagesCollapsed: !this.state.samplePagesCollapsed}); return false; } }>
                      <i className="fa fa-files-o fa-fw" />&nbsp;Sample Pages<span className="fa arrow" />
                    </a> 
                    <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.samplePagesCollapsed})}>
                      <li>
                        <Link to="/blank">Blank Page</Link>
                      </li>
                      <li>
                        <Link to="login">Login Page</Link>
                      </li>
                    </ul>
                  </li>
                    
                  <li>
                    <a href="http://www.strapui.com/">Premium React Themes</a>
                  </li>
                </ul>
              </div>
            </div>
          </Navbar>

          <div id="page-wrapper" className="page-wrapper" ref="pageWrapper" style={{minHeight: this.state.Height}}>
            {/* {React.cloneElement(this.props.children, {...this.props})} */}
          </div>

        </div>

    );
  },
  statics: {
    fetchData: function(params) {}
  }
});

export default HomePage;
