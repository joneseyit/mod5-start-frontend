class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    render json: @photos
  end

  def show
    @photo = Photo.find(params[:id])
    render json: @photo
  end

  def create

    @photo = Photo.create(photo_params)
    render json: @photo
  end

  def update
    @photo = Photo.find(params[:id])
    @photo.update(photo_params)
    render json: @photo
  end

  def destroy
    @photo = photo.find(params[:id])
    @photo.destroy
  end

  private
  def photo_params
    params.permit(:location, :title, :caption, :image, :user_id, :picture)
  end
end
