class User < ApplicationRecord
    has_many :house_owners
    has_many :owners, through: :house_owners
    has_many :houses, through: :house_owners
    has_secure_password

    # Username Validations - Figure out how to make login case-insensitive
    validates :username, presence: true
    validates_uniqueness_of :username, :case_sensitive => false

    # Password Validations
    validates :password, length: { in: 6..30}
    validates :password, presence: true
    validates :password, confirmation: true
    validates :password_confirmation, presence: true
    validate :password_lower_case
    validate :password_uppercase
    validate :password_special_char
    validate :password_contains_number
      
    def password_uppercase
        return if !!password.match(/\p{Upper}/)
        errors.add :password, ' must contain at least 1 uppercase '
    end
    
    def password_lower_case
        return if !!password.match(/\p{Lower}/)
        errors.add :password, ' must contain at least 1 lowercase '
    end
    
    def password_special_char
        special = "?<>',?[]}{=-)(*&^%$#`~{}!"
        regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
        return if password =~ regex
        errors.add :password, " must contain special character: #{"?<>',?[]}{=-)(*&^%$#`~{}!"}" 
    end
    
    def password_contains_number
        return if password.count("0-9") > 0
        errors.add :password, ' must contain at least one number'
    end
end
