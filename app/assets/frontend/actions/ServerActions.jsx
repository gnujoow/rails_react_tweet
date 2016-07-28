import AppDispatcher from "../dispatcher"
import ActionType from "../constants"

export default {
  receivedTweets(rawTweets) {
    console.log(3, "ServerActions.receivedTweets");
     AppDispatcher.dispatch({
       actionType: ActionType.RECEIVED_TWEETS,
       rawTweets
     })
  },
  receivedOneTweet(rawTweet) {
    AppDispatcher.dispatch({
      actionType: ActionType.RECEIVED_ONE_TWEET,
      rawTweet
    })
  },
  receivedUsers(rawUsers) {
    console.log("#", "ServerActions.receivedUsers");
     AppDispatcher.dispatch({
       actionType: ActionType.RECEIVED_USERS,
       rawUsers
     })
  }
}
