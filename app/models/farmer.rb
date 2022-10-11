class Farmer < ApplicationRecord
    has_many :items, dependent: :destroy
    has_many :customers, through: :items
end
