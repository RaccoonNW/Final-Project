class Owner < ApplicationRecord
    has_many :house_owners, validate: false
    has_many :houses, through: :house_owners

    validates :name, :number, :email, :notes, presence: true

    def house_attributes=(params)
        self.houses.build(params)
    end

end
