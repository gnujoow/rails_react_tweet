import ServerAction from "./actions/ServerActions"

export default {
  getAllTweets() {
    console.log(2, "API.getAllTweets")
    $.get("/tweets")
    .success( rawTweets => ServerAction.receivedTweets(rawTweets))
    .error(error => console.log(error));
  }
}
