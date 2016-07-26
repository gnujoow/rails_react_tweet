import TweetBox from "./component/TweetBox"
import TweetList from "./component/TweetList"

class Main extends React.Component {
  render() {
    return(
      <div className ="container">
        <TweetBox />
        <TweetList />
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
