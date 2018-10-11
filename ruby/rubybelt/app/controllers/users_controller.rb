class UsersController < ApplicationController
  def create
  	@user = User.create(user_params)
      if @user.valid?
        session[:user_id] = @user.id
        redirect_to "/bright_ideas"
      else
        flash[:errors] = @user.errors.full_messages
        redirect_to "/main"
      end
  end

  def redirect
  end

  def show
  	@user = User.find(params[:id])
  end
  private
    def user_params
      params.require(:user).permit(:name, :alias, :email, :password, :password_confirmation)
    end
end
