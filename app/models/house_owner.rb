class HouseOwner < ApplicationRecord
    belongs_to :user
    belongs_to :owner
    belongs_to :house
end
