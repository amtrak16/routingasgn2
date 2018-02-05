import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import "react-router";
import {
  BrowserRouter,
  Route,
  NavLink
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <ul className="heading-nav">
              <li className="heading-nav-entry"><NavLink exact to="/" activeClassName="active" activeStyle={{padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px'}}>Home</NavLink></li>
              <li className="heading-nav-entry"><NavLink exact to="/users" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px'}}>Users</NavLink></li>
              <li className="heading-nav-entry"><NavLink exact to="/todos" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px'}}>Todos</NavLink></li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:id" component={UserDetail} />
            <Route path="/todos" component={Todos} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="small-5 columns">&nbsp;</div>
          <div className="small-2 columns">
            <div className="card text-center">
              <h1>Users<br />and<br /> Todos</h1>
            </div>
          </div>
          <div className="small-5 columns">&nbsp;</div>
        </div>
      </div>
    )
  }
}

class Users extends Component {
  render() {
    return (
      <div>
        <ul class="tabs vertical">
          <li className="tab-title"><NavLink exact to="/users/1" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>User 1</NavLink></li>
          <li className="tab-title"><NavLink exact to="/users/2" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>User 2</NavLink></li>
          <li className="tab-title"><NavLink exact to="/users/3" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>User 3</NavLink></li>
          <li className="tab-title"><NavLink exact to="/users/4" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>User 4</NavLink></li>
        </ul>
      </div>
    )
  }
}

const UserDetail = (props) => {
      console.log(props)
  return (
      <div>
        <ul>
          <li>User Detail for {props.match.params.id}</li>
        </ul>
      </div>)
}

class Todos extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Todo 1</li>
          <li>Todo 2</li>
          <li>Todo 3</li>
          <li>Todo 4</li>
        </ul>
      </div>
    )
  }
}

export default App;
