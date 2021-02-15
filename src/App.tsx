import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Main from './main';
import Sidebar from './sidebar';


interface Props {}
interface State {
  isSidebarOpen: boolean;
}
class App extends Component <Props, State> {
  state: State = {
    isSidebarOpen: false
  }

  handleMenuClick = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen})
  }
  render() {
    return (
      <>
        <Header onMenuClick = {this.handleMenuClick}/>
        <Main/>
        <Sidebar 
        isOpen={this.state.isSidebarOpen}
        onSidebarClose = {this.handleMenuClick}
        />
      </>
    );
  }
}

export default App;
