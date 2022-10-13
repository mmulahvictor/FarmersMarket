class SessionsController < ApplicationController

    def create
        farmer = Farmer.find_by(email: params[:email])
        if farmer&.authenticate(params[:password])
          session[:id] = farmer.id
          render json: farmer, status: :created
        else
          render json: {error: "Invalid email or password"}, status: :unauthorized
        end
    end

    def destroy
      session.delete :id
      head :no_content
    end
end
