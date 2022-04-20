class House < ApplicationRecord
    has_many :house_owners
    has_many :owners, through: :house_owners
end
