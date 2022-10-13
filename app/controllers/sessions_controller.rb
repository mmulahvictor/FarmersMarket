class SessionsController < ApplicationController

    def create
        farmer = Farmer.find_by(username: params[:username])
        session[:id] = farmer.id
        render json: farmer
    end

    def destroy
      session.delete :id
      head :no_content
    end
end
