export default class TweetList extends React.Component {
  render() {
    return (
      <div>
        <ul className ="collection">
          <li className="collection-item avatar">
            <i className="material-icons circle">일등</i>
            <span className="title">내용</span>
            <p>First Line</p>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle">이둥</i>
            <span className="title">내용</span>
            <p>First Line</p>
          </li>
        </ul>
      </div>
    );
  }
}
