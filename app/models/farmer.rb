class Farmer < ApplicationRecord
    has_secure_password
    has_many :items, dependent: :destroy
    has_many :customers, through: :items
end
