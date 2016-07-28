import React from 'react';
import UserStore from '../stores/UserStore'

let getAppState = () => {
  return { users: UserStore.getAll()};
}

export default class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
  }
  render() {
    let users = this.state.users.map(user => {
      return (
        <li className="collection-item avatar">
          <img src={user.gravatar} className="circle" />
          <span className="title">{user.name}</span>
        </li>
      )
    });
    return (
      <div>
        <h3>팔로우 해봐요</h3>
        <ul className="collection">
          {users}
        </ul>
      </div>
    );
  }
}
