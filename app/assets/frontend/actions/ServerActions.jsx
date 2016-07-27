import AppDispatcher from "../dispatcher"
import ActionType from "../constants"

export deafult {
  receivedTweets(rawTweets) {
     AppDispatcher.dispatch({
       actionType: ActionType.RECEIVED_TWEETS,
       rawTweets
     })
  }
}
