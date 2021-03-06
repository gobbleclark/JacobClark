class Api::PostsController < ApplicationController

  def index
    posts = Post.order("id DESC").all 

    render json: posts
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else 
      render json: { errors: haul.errors }, status: 422
    end
  end

  def search 
    method = params[:method]
  searching = Post.where("name ilike ? or text ilike ? or title ilike ?", "%#{method}%", "%#{method}%", "%#{method}%")
    render json: searching
end

  private
  def post_params
    params.require(:post).permit(:name, :text, :title, :image)
  end

end
