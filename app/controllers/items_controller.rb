class ItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response

    def index
        render json: Item.all
    end

    def create
        item = Item.create(item_params)
        render json: item, status: :created
    end

    def show
        render json: find_item, status: :ok
    end

    def update
        item = find_item
        item.update(item_params)
        render json: item, status: :updated
    end

    def destroy
        item = find_item
        item.destroy
        head :no_content
    end

    private

    def find_item
        Item.find_by(id: params[:id])
    end

    def item_params
        params.permit(:name, :image_url, :quantity, :farmer_id, :customer_id)
    end

    def render_record_not_found_response
        render json: { error: "Item not found" }, status: :not_found
    end
end
