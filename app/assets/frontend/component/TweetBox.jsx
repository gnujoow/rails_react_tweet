export default class TweetBox extends React.Component {
  render() {
    return (
      <div className="row">
        <form>
          <div className="input-field">
            <label>what you reckon?</label>
            <textarea className="materialize-textarea" />
            <button className="btn right">공유</button>
          </div>
        </form>
      </div>
    );
  }
}
