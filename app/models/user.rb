class User < ApplicationRecord
    has_many :house_owners
    has_many :owners, through: :house_owners
    has_many :houses, through: :house_owners

    has_secure_password
end
