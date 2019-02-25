class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user.to_json(:include => :photos)
  end

  def create
    @user = User.create(user_params)
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render json: @user
  end

  def destroy
    @user = user.find(params[:id])
    @user.destroy
  end

  private
  def user_params
    params.require(:user).permit(:password, :first_name, :last_name, :username, :bio)
  end
end
