class SessionsController < ApplicationController
	layout "two_column"
	def new
	end

	def redirect
		redirect_to "/main"
	end

	def create
	@user = User.find_by_email(params[:email]).try(:authenticate, params[:password])
		if @user == nil
			flash[:errors] = ["You need to register"]
			p "nill user"
			redirect_to "/main"
		else
			if @user.valid?
				session[:user_id] = @user.id
				p "user was valid"
				redirect_to "/bright_ideas"
			else
				flash[:errors] = @user.errors.full_messages
				p "user had errors"
				redirect_to "/main"
			end
		end
	end

	def destroy
		session[:user_id] = nil
		redirect_to "/main"
	end
end
