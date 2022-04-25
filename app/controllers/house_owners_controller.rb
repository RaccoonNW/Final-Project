class HouseOwnersController < ApplicationController

    def index 
        render json: @current_user.house_owners, status: :ok
    end

    def show
        house_owner = @current_user.house_owners.find_by(id: params[:id])
        render json: house_owner, status: :ok
    end
end
