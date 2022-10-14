class ItemsController < ApplicationController
  def index
    render json: Item.all, status: :ok
  end

  def create
    item = @current_farmer.items.create!(item_params)
    render json: item, status: :created
  end

  def update
    item = find_params
    item.update(item_params)
    render json: item
  end

  def destroy
    find_params.destroy
    head :no_content
  end

  private

  def find_params 
    Item.find_by(id: params[:id])
  end

  def item_params
    params.permit(:name, :image_url, :quantity)
  end
end
