class Owner < ApplicationRecord
    has_many :house_owners
    has_many :houses, through: :house_owners
end
