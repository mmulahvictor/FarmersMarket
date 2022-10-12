class CustomersController < ApplicationController

    def index
        render json: Customer.all
    end

    def create
        customer = Customer.create(customer_params)
        render json: customer, status: :created
    end

    private

    def customer_params
        params.permit(:name, :email, :password)
    end
end
