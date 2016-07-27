export default class Tweet extends React.Component {
  render() {
    return (
      <li className="collection-item avatar">
        <i className="material-icons circle">:)</i>
        <span className="title">{this.props.name}</span>
        <time>{this.props.formattedDate}</time>
        <p>{this.props.body}</p>
      </li>
    );
  }
}
