class LoginController < ApplicationController
  def login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      token = JWT.encode({ user_id: @user.id }, ENV['SECRET'], 'HS256')
      render json: { token: token, username: @user.username }, status: :ok
    else
      render json: { errors: "Could not login with those credentials" },
        status: :unauthorized
    end
  end

end
