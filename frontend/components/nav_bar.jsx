import React from 'react';
import { Link, hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout()
      .then(() => hashHistory.push('/login'));
  }


  render() {
    const ulContent = () => {
      let content;
      if (this.props.currentUser) {
        content = (
          <ul>
            <li>Welcome, {this.props.currentUser.username}</li>
            <li>
              <button type='button' onClick={this.handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        );
      } else {
        content = (
          <ul>
            <li><Link to='/login'>Log In</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
          </ul>
        );
      }

      return content;
    };

    const searchBar = () => {
      let content;
      if (this.props.currentUser) {
        content = (
          <label>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type='text' />
          </label>
        );
      }
      return content;
    };

    return (
      <nav>
        <h1>*slackr</h1>
        <div>
          {searchBar()}
          <aside>
            <i className="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
            {ulContent()}
          </aside>
        </div>
      </nav>
    );
  }
}

export default NavBar;
