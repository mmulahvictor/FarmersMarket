class FarmersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response

    def index
        render json: Farmer.all
    end

    def create
        farmer = Farmer.create(farmer_params)
        render json: farmer, status: :created
    end

    def show
        farmer = find_farmer
        render json: farmer, serializer: FarmerWithItemsSerializer, status: :ok
    end

    def destroy
        farmer = find_farmer
        farmer.destroy
        head :no_content
    end

    private

    def find_farmer
        Farmer.find(params[:id])
    end

    def farmer_params
        params.permit(:name, :phone, :location, :email, :password)
    end

    def render_record_not_found_response
        render json: { error: "Farmer not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
