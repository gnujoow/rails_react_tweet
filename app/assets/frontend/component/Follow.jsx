import React from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import { Link } from 'react-router';

let getAppState = () => {
  return { users: UserStore.getAll()};
}

export default class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    UserActions.getAllUsers();
    UserStore.addChangeListener(this._onChange);
  }
  componentWillUnMount() {
    UserStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    console.log(5, "Main._onChange");
    this.setState(getAppState());
  }

  render() {
    let users = this.state.users.map(user => {
      return (
        <li key={user.id} className="collection-item avatar">
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
        <Link to="/">돌아가기</Link>
      </div>
    );
  }
}
