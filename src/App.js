import { Component } from "react";
import Header from "./Page/Header";
import { Outlet } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        {/* adding Outlet for the page content on every route*/}
        <Outlet />
      </div>
    );
  }
}

export default App;
