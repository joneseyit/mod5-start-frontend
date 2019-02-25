class PhotoTagsController < ApplicationController
  def index
    @photo_tags = PhotoTag.all
    render json: @photo_tags
  end

  def create
    @photo_tag = PhotoTag.create(photo_tag_params)
    render json: @photo_tag
  end

  private
  def photo_tag_params
    params.require(:photo_tag).permit(:tag_id, :photo_id)
  end
end
