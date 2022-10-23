import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SideBar from "./Sidebar";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      logged_in: localStorage.getItem("Token") ? true : false
    };
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        {loggedIn && (
          <nav
            class="navbar navbar-expand-lg navbar-light  bg-dark"
            id="mainNav"
          >
            <div class="container">
              <a
                class="navbar-brand js-scroll-trigger text-white"
                href="/index/"
              >
                 <img
                    src="https://www.metrolabsservices.com/images/logo.png"
                    alt="metrolabs logo"
                    style={{ width: "40%", height: "0%",  }}
                  />  
              </a>

              <SideBar />
            </div>
          </nav>
        )}
      </div>
    );
  }
}

export default withRouter(Header);
