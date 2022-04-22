class HousesController < ApplicationController
    def index 
        render json: @current_user.houses, status: :ok
    end

    def show
        house = @current_user.house.find_by(id: params[:id])
        render json: house, status: :ok
    end
end
