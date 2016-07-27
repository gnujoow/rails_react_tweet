export default class Tweet extends React.Component {
  render() {
    return (
      <li className="collection-item avatar">
        <i className="material-icons circle">:)</i>
        <span className="title">{this.props.name}</span>
        <p>{this.props.body}</p>
      </li>
    );
  }
}
