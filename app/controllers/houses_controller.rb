class HousesController < ApplicationController
    def index 
        render json: @current_user.houses.distinct, status: :ok
    end

    def show
        house = @current_user.house.find_by(id: params[:id])
        render json: house, status: :ok
    end

    def update
        house = @current_user.houses.find_by(id: params[:id])
        house.update(house_params)
        render json: house
    end
  
    private

    def house_params
    params.require(:editedData).permit(:address, :sq_footage, :floor_count, :window_count, :roof_pitch, :notes)
    end

end
