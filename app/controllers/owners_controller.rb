class OwnersController < ApplicationController
    before_action :authorize

    def index 
      render json: @current_user.owners.distinct, status: :ok  
    end

    def show
        owner = @current_user.owner.find_by(id: params[:id])
        render json: owner, status: :ok
    end
end
