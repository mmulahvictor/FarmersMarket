class FarmersController < ApplicationController
    # skip_before_action :authorize, only: :create

    def create
      farmer = Farmer.create!(farmer_params)
      session[:farmer_id] = farmer.id
      render json: farmer, status: :created
    end

    def show
      render json: @current_farmer
    end

    private

    def farmer_params
      params.permit(:username, :password, :password_confirmation, :phone, :location, :email)
    end
end