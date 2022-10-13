class Item < ApplicationRecord
    belongs_to :farmer
    validates :name, presence: true
    # belongs_to :customer
end
