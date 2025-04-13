import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">NewsMonkey</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a   style={{ cursor: 'pointer' }} className="nav-link" onClick={() => this.props.changeCategory('general')}>General</a>
                </li>
                <li className="nav-item">
                  <a    style={{ cursor: 'pointer' }}  className="nav-link"  onClick={() => this.props.changeCategory('health')}>Health</a>
                </li>
                <li className="nav-item">
                  <a    style={{ cursor: 'pointer' }} className="nav-link" onClick={() => this.props.changeCategory('sports')}>Sports</a>
                </li>
                <li className="nav-item">
                  <a    style={{ cursor: 'pointer' }} className="nav-link" onClick={() => this.props.changeCategory('business')}>Business</a>
                </li>
                <li className="nav-item">
                  <a    style={{ cursor: 'pointer' }} className="nav-link" onClick={() => this.props.changeCategory('science')}>Science</a>
                </li>
                <li className="nav-item">
                  <a   style={{ cursor: 'pointer' }}  className="nav-link" onClick={() => this.props.changeCategory('technology')}>Technology</a>
                </li>
                <li className="nav-item">
                  <a    style={{ cursor: 'pointer' }} className="nav-link" onClick={() => this.props.changeCategory('entertainment')}>Entertainment</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;