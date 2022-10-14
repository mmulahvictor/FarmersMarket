class ItemsController < ApplicationController
  def index
    render json: Item.all, status: :ok
  end

  def create
    item = @current_farmer.items.create!(item_params)
    render json: item, status: :created
  end

  def destroy
    item = Item.find_by(id: params[:id])
    item.destroy
    head :no_content
  end

  private

  def item_params
    params.permit(:name, :image_url, :quantity)
  end
end
