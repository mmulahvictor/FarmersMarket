class ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  def create
    item = @current_farmer.recipes.create!(item_params)
    render json: item, status: :created
  end

  private

  def item_params
    params.permit(:name, :image_url, :quantity)
  end
end
