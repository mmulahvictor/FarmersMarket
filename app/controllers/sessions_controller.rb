class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    farmer = Farmer.find_by(username: params[:username])
    if farmer&.authenticate(params[:password])
      session[:farmer_id] = farmer.id
      render json: farmer
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete :farmer_id
    head :no_content
  end
end