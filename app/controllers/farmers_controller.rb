class FarmersController < ApplicationController
    def index
        render json: Farmer.all
    end

    def create
        farmer = Farmer.create(farmer_params)
        render json: farmer, status: :created
    end

    def show
        render json: find_farmer, status: :ok
    end

    def destroy

    end

    private

    def find_farmer
        Farmer.find_by(id: params[:id])
    end

    def farmer_params
        params.permit(:name, :phone, :location, :email, :password)
    end
end
