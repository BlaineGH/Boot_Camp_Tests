class IdeasController < ApplicationController
  def show
  	@ideas = Idea.all
  end

  def create
  	@idea = Idea.create(idea_params)
      if @idea.valid?
        redirect_to "/bright_ideas"
      else
        flash[:errors] = @idea.errors.full_messages
        redirect_to "/bright_ideas"
      end
  end

  def showone
  	@idea = Idea.find(params[:id])
  	@likes = Like.where(idea_id: @idea.id)
  end

  def new
  end

  def destroy
  	@idea = Idea.find(params[:id])
  	@idea.destroy
  	redirect_to "/bright_ideas"
  end
  private
  	def idea_params
  		params.require(:idea).permit(:user_id, :content)
  	end
end
