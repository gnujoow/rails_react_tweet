class TweetsController < ApplicationController
  def index
    render json: Tweet.all
  end

  def create
    tweet = Tweet.create(body: params[:tweet], current_user.id)
    render json: tweet
  end
end
