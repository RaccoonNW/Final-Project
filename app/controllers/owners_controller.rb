class OwnersController < ApplicationController
    # before_action :authorize

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

    def create 
      owner = @current_user.owners.create(owner_params_create)
      owner.house_owners.last.update(user_id: @current_user.id)
      render json: owner, status: :created
    end

    def destroy
      owner = @current_user.owners.find_by(id: params[:id])
      owner.destroy
    end

    def org_owners
      render json: @current_user.owners.order(:name).distinct, status: :ok
    end
    
    private
    
    def owner_params
      params.require(:editedData).permit(:name, :number, :email, :notes)
    end
    
    def owner_params_create
      params.require(:newOwnerData).permit(:name, :number, :email, :notes, house_attributes: [:address, :sq_footage, :floor_count, :window_count, :roof_pitch, :notes])
    end

    def owner_params_create_no_house
      params.require(:ownerData).permit(:name, :number, :email, :notes)
    end

    # def delete_owner_data(owner)
    #   owner.houses.destroy
    #   owner.house_owners.destroy
    # end
end
