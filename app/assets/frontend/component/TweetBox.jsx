export default class TweetBox extends React.Component {
  sendTweet(event){
    event.preventDefault();
    this.props.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = '';
    console.log("sendTweet "+event);
  }
  render() {
    return (
      <div className="row">
        <form onSubmit = {this.sendTweet.bind(this)}>
          <div className="input-field">
            <label>what you reckon?</label>
            <textarea className="materialize-textarea" ref="tweetTextArea" />
            <button className="btn right" type="submit">공유</button>
          </div>
        </form>
      </div>
    );
  }
}
