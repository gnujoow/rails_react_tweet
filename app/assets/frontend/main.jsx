import TweetBox from "./component/TweetBox"
import TweetList from "./component/TweetList"

let mockTweets = [
  {id:1 , name: 'good man', body : 'hungry'},
  {id:2 , name: 'good man1', body : 'hungry1'},
  {id:3 , name: 'good man2', body : 'hungry2'},
];

class Main extends React.Component {
  render() {
    return(
      <div className ="container">
        <TweetBox />
        <TweetList tweets={mockTweets} />
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
