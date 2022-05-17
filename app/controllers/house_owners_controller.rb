class HouseOwnersController < ApplicationController

    def index 
        render json: @current_user.house_owners, status: :ok
    end

    def show
        house_owner = @current_user.house_owners.find_by(id: params[:id])
        render json: house_owner, status: :ok
    end

    def create 
        house_owner = @current_user.house_owner.create!(house_owner_params)
    end

    private

    def house_owner_params
        params.permit(:user_id, :owner_id, :house_id)
    end
end
