class Api::PostsController < ApplicationController

  def index
    posts = Post.all 

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

  private
  def post_params
    params.require(:post).permit(:name, :text, :title)
  end

end
