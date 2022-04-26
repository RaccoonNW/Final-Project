class OwnersController < ApplicationController
    before_action :authorize

    def index 
      render json: @current_user.owners.distinct, status: :ok  
    end

    def show
        owner = @current_user.owner.find_by(id: params[:id])
        render json: owner, status: :ok
    end

    def update
      owner = @current_user.owners.find_by(id: params[:id])
      owner.update(owner_params)
      render json: owner
    end

    private

    def owner_params
      params.require(:editedData).permit(:name, :number, :email, :notes)
    end
end
