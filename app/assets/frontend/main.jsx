import TweetBox from "./component/TweetBox"
import TweetList from "./component/TweetList"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsList: [] }
  }
  addTweet(tweetToAddd){
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({ id: Date.now(), name: '손님', body: tweetToAddd});

    this.setState({ tweetsList: newTweetsList});
  }
  render() {
    return(
      <div className ="container">
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

let documentReady = () =>{
  ReactDOM.render(
      <Main />,
      document.getElementById('main')
  );
};

$(documentReady);
