class LikesController < ApplicationController
  def create
  	@like = Like.create(user_id: current_user.id, idea_id: params[:id])
  	@idea = Idea.find(params[:id])
  	Idea.increment_counter(:likes, params[:id])
  	redirect_to "/bright_ideas"
  end

  def new
  end
end
